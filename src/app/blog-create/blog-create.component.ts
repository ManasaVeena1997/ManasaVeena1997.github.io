import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from "../blog-http.service";

import { ActivatedRoute, Router} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import { ToastsManager} from 'ng2-toastr/ng2-toastr';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(public blogHttpService:BlogHttpService, private _route:ActivatedRoute, private router:Router, public toastr:ToastrManager, vcr:ViewContainerRef ) { 
    //this.toastr.setRootViewContainerRef(vcr);
  }

  public blogTitle:string;
  public blogDescription:string;
  public blogBodyHtml:string;
  public blogCategory:string;
  public possibleCategories= ["Comedy", "Thriller", "Technical", "Horror", "Drama","Action"];


  ngOnInit(): void {
  }

  public createBlog():any{

    let blogData={

    title:this.blogTitle,
    description:this.blogDescription,
    blogBody:this.blogBodyHtml,
    category:this.blogCategory

  }//end of blog data
  console.log(blogData);
  
  this.blogHttpService.createBlog(blogData).subscribe(
    data=>{
      console.log("Blog Created");
      console.log(data);
      this.toastr.successToastr('Blog Created Successfully', 'Success!');
      setTimeout(()=>{
        this.router.navigate(['/blog',data.data.blogId]);
      },1000)

    },
    error=>{
      console.log("Some Error occured");
      console.log(error.errorMessage);
      this.toastr.successToastr('Some error occured');

    }
  )

  }//end create blog method
}
