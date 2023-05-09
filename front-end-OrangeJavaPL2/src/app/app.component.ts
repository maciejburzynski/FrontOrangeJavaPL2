import {Component, OnInit} from '@angular/core';
import {BreadService} from "./bread.service";
import {Bread} from "./Bread";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-end-OrangeJavaPL2';

  public breads:Bread[]=[]

  constructor(private breadService: BreadService) {
  }

  getBreads(): void {
    this.breadService.getBreads().subscribe(
      (response: Bread[]) => {
        console.log("Eluwina Byku");
        console.log(response);
        this.breads = response
      }, (error: HttpErrorResponse) => {
        console.error(error.message)
      }
    );
  }

  ngOnInit(): void {
    this.getBreads();
  }

}

