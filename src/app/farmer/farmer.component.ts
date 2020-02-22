import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  form: FormGroup;

  constructor(public postService: PostService, public router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null,{validators:[Validators.required]}),
      description: new FormControl(null,{validators:[Validators.required]}),
    })

  }

  onSavePost(){
    if(this.form.invalid){
      return;
    }
    this.postService.addPost(
    this.form.value.title,
    this.form.value.description
    )
    
  }

}
