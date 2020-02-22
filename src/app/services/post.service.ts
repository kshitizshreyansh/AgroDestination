import { Injectable } from '@angular/core';
import { Post } from '../model/postModel';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private post: Post;
  private postUpdated = new Subject<Post[]>();
  private postdetailsUpdated = new Subject<any>();

  constructor(private http: HttpClient) { }

  addPost(title:string, description:string)
  {
    const post: Post = { pID: null, title: title, description: description };
   
    this.http.post<{message:string;postId:string}>(
      "http://localhost:1025/posts/post",post
    ).subscribe(responseData => {

      const id = responseData.postId;
      post.pID = id;
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);

    })
  }


getPosts(){
  this.http.get("http://localhost:1025/posts/getPost")
  .pipe(
    map(postData => {
      return postData["result"].map(post => {
        return {
          _id:post._id,
          PostSchema:post["PostSchema"].map(opl => {
            return {
              title:opl.title,
              description:opl.description,
              pID:opl._id,

            };
          })
        }
      });
    })
  )
  .subscribe(transformedPost => {
    this.posts = transformedPost;
    this.postUpdated.next([...this.posts]);
  });
}

getPost(postID:string){
  return this.http.get<{message:string,product:Post}>("http://localhost:1025/posts/getPostDetails/" + postID).subscribe(postDetails => {
    this.post = postDetails.product 
    this.postdetailsUpdated.next(this.post);

    })
  
}

getPostDetailsListener(){
  return this.postdetailsUpdated.asObservable();
}

getPostUpdateListener(){
  return this.postUpdated.asObservable();
}
}
