import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-supplierrequest',
  templateUrl: './supplierrequest.component.html',
  styleUrls: ['./supplierrequest.component.css']
})
export class SupplierrequestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  farmer(){
    this.router.navigate(["/farmer"]);
  }
}
