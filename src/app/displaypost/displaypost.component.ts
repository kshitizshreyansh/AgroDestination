import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../model/postModel'
import { Subscription} from 'rxjs'

@Component({
  selector: 'app-displaypost',
  templateUrl: './displaypost.component.html',
  styleUrls: ['./displaypost.component.css']
})
export class DisplaypostComponent implements OnInit {

  postDisplay: Post[] = [];
  private postSub : Subscription;

  constructor(public postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener().subscribe((postDetails:Post[]) => {
      console.log("postDetails ",postDetails);
      this.postDisplay = postDetails
    })
  }

  postDescription(postID:any){
    console.log(postID);
  
     this.postService.getPost(postID)
     //this.router.navigate(["/productDescription",productID])
     //this.cartService = productID
    }

}
