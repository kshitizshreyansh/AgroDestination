import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Subject } from "rxjs";
import { Router } from "@angular/router";

import { map } from "rxjs/operators";


import { Tip } from '../model/tipsModel'
//import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  private tips:Tip[] = [];
  private tip:Tip;
  private prodID:string = null;
  private tipUpdated = new Subject<Tip[]>();
  private tipdetailsUpdated = new Subject<any>();

  constructor(private http:HttpClient,private router:Router) { }

  addTip(title:string,description:string)
  {
    const tip: Tip = { tipID: null, title: title,  description: description };
   
    this.http.post<{message:string;postId:string}>(
      "http://localhost:1025/tips/post",tip
    ).subscribe(responseData => {

      const id = responseData.postId;
      tip.tipID = id;
      this.tips.push(tip);
      this.tipUpdated.next([...this.tips]);

    })
  }

    getTips(){
      this.http.get("http://localhost:1025/tips/getTip")
      .pipe(
        map(tipData => {
          return tipData["result"].map(tip => {
            return {
              _id:tip._id,
              TipSchema:tip["TipSchema"].map(opl => {
                return {
                  title:opl.title,
                  description:opl.description,
                  
                  
                  tipID:opl._id,
                  
  
                };
              })
            }
          });
        })
      )
      .subscribe(transformedTip => {
        this.tips = transformedTip;
        this.tipUpdated.next([...this.tips]);
      });
    }

  

    getTip(tipID:string){
      return this.http.get<{message:string,product:Tip}>("http://localhost:1025/tips/getTipDetails/" + tipID).subscribe(tipDetails => {
        this.tip = tipDetails.product 
        this.tipdetailsUpdated.next(this.tip);
    
        })
      
    }
   
  getTipDetailsListener(){
    return this.tipdetailsUpdated.asObservable();
  }

  getTipUpdateListener(){
    return this.tipUpdated.asObservable();
  }

}
