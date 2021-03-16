import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Subject } from "rxjs";
import { Router } from "@angular/router";

import { map } from "rxjs/operators";
import { LoginService } from "./login.service";



import { Scrop } from '../model/sellModel'
//import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class SellcropsService {

  private scrops:Scrop[] = [];
  private scrop:Scrop;
  private scropID:string = null;
  private scropUpdated = new Subject<Scrop[]>();
  private scropdetailsUpdated = new Subject<any>();

  
  private crop:any;
  constructor(private http:HttpClient,private router:Router,private loginService:LoginService) { }

  addSellcrop(title:string,  category: string, image: string)
  {
    const scrop: Scrop = { scropID: null, title: title, category: category, image: image};
   
    this.http.post<{message:string;postId:string}>(
      "http://localhost:1025/scrops/post",scrop
    ).subscribe(responseData => {

      const id = responseData.postId;
      scrop.scropID = id;
      this.scrops.push(scrop);
      this.scropUpdated.next([...this.scrops]);

    })
  }

    getScrops(){
      this.http.get("http://localhost:1025/scrops/getScrop")
      .pipe(
        map(scropData => {
          return scropData["result"].map(scrop => {
            return {
              _id:scrop._id,
              ScropSchema:scrop["ScropSchema"].map(opl => {
                return {
                  scropID:opl._id,
                  title:opl.title,
                  category:opl.category,
                  image: opl.image,
                 
  
                };
              })
            }
          });
        })
      )
      .subscribe(transformedScrop => {
        this.scrops = transformedScrop;
        this.scropUpdated.next([...this.scrops]);
      });
    }

  

    getScrop(scropID:string){
      return this.http.get<{message:string,product:Scrop}>("http://localhost:1025/scrops/getScropDetails/" + scropID).subscribe(scropDetails => {
        this.scrop = scropDetails.product
        this.scropdetailsUpdated.next(this.scrop);
    
        })
      
    }
   
  getScropDetailsListener(){
    return this.scropdetailsUpdated.asObservable();
  }

  getScropUpdateListener(){
    return this.scropUpdated.asObservable();
  }

  deleteSellItem(scropID:string){

    console.log("Sell Service ID",scropID);
   
    this.http.delete("http://localhost:1025/scrops/" + scropID)
    .subscribe(() => {
      console.log("In deleteSellCropItem Service");
     const sellcropItemupdated = this.scrops.filter(scropItem => scropItem.scropID !== scropID);
     this.scrops = sellcropItemupdated;
     this.scropdetailsUpdated.next([...this.scrops]);
     console.log(scropID);


    });

   console.log("sell crop Service ID",scropID);

  }

  generateMail(){
    console.log("In sell crop Service",this.loginService.getusername());
    this.crop = localStorage.getItem("Email");
    console.log("inside generate mail",this.crop)
    const userMail = {mail:this.crop}
    //const tel = this.loginService.gettel();
    this.http.post(
      "http://localhost:1025/scrops/mail",userMail).subscribe(responseData =>{
        console.log(responseData);
      })
  
  }


  generateMessage(){
    console.log("In sell crop Service",this.loginService.gettel());
    this.crop = localStorage.getItem("message");
    console.log("inside generate message",this.crop)
    const tel = {message:this.crop}
    this.http.post(
      "http://localhost:1025/scrops/message",tel).subscribe(responseData =>{
        console.log(responseData);
      })
  }

  


}
