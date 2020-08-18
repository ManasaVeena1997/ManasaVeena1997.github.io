/*this is by default statement - Angular way of including header files*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import {BlogService} from "../blog.service";
import { BlogHttpService } from "../blog-http.service";

//Decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

// a Simple Class
export class HomeComponent implements OnInit, OnDestroy {
  
  public allBlogs=[];

  constructor(public blogHttpService:BlogHttpService) {
    console.log("constructor in home component is called")
  }


  ngOnInit(): void {
    console.log("ng OnInit in home component is called");
    this.allBlogs=this.blogHttpService.getAllBlogs().subscribe(
      data=>{
        console.log("logging data");
        console.log(data);
        this.allBlogs=data['data'];

      },
      error=>{
        console.log("Some error occured");
        console.log(error.errorMessage);

      }
    )
    
  }
    
  ngOnDestroy(): void {
    console.log("ng OnDestroy in home component is called")

  }

}
