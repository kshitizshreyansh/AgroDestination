import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Subject } from "rxjs";
import { Router } from "@angular/router";

import { map } from "rxjs/operators";


import { Crop } from '../model/cropModel'


@Injectable({
  providedIn: 'root'
})
export class CropService {
  private crops:Crop[] = [];
  private crop:Crop;
  private cropID:string = null;
  private cropUpdated = new Subject<Crop[]>();
  private cropdetailsUpdated = new Subject<any>();

  constructor(private http:HttpClient,private router:Router) { }

  addCrop(title:string, description:string, quantity:string, imagePath:string)
  {
    const crop: Crop = { cropID: null, title: title, description: description, quantity: quantity,imagePath:imagePath };
   
    this.http.post<{message:string;postId:string}>(
      "http://localhost:1025/crop/post",crop
    ).subscribe(responseData => {

      const id = responseData.postId;
      crop.cropID = id;
      this.crops.push(crop);
      this.cropUpdated.next([...this.crops]);

    })
  }


getCrops(){
  this.http.get("http://localhost:1025/crop/getCrop")
  .pipe(
    map(cropData => {
      return cropData["result"].map(crop => {
        return {
          _id:crop._id,
          CropSchema:crop["CropSchema"].map(opl => {
            return {
              title:opl.title,
              description:opl.description,
              quantity:opl.quantity,
              cropID:opl._id,
              imagePath:opl.imagePath

            };
          })
        }
      });
    })
  )
  .subscribe(transformedCrop => {
    this.crops = transformedCrop;
    this.cropUpdated.next([...this.crops]);
  });
}

getCrop(cropID:string){
  return this.http.get<{message:string,product:Crop}>("http://localhost:1025/crop/getCropDetails/" + cropID).subscribe(cropDetails => {
    this.crop = cropDetails.product 
    this.cropdetailsUpdated.next(this.crop);

    })
  
}

getCropDetailsListener(){
  return this.cropdetailsUpdated.asObservable();
}

getCropUpdateListener(){
  return this.cropUpdated.asObservable();
}



}