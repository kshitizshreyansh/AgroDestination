import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Scrop } from '../model/sellModel';
import { SellcropsService } from '../services/sellcrops.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sell-crops',
  templateUrl: './sell-crops.component.html',
  styleUrls: ['./sell-crops.component.css']
})
export class SellCropsComponent implements OnInit {


  form: FormGroup;
  constructor(public scropsService: SellcropsService, private router:Router) { }

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null,{validators:[Validators.required]
      }),


      category: new FormControl(null,{validators:[Validators.required]
      }),

      image: new FormControl(null,{validators:[Validators.required]
      }),
  
    });
  }

  farmer(){
    this.router.navigate(["/farmer"]);
  }

  onAddCrop(){
    if(this.form.invalid){
      return;
    }


    this.scropsService.addSellcrop(
      this.form.value.title,
      this.form.value.category,
      this.form.value.image,

    )

    
  }

}
