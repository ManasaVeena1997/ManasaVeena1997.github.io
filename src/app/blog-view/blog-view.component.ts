import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { from } from 'rxjs';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Location } from '@angular/common';



@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

  constructor(private _route:ActivatedRoute, private router: Router, public blogService:BlogService, public blogHttpService:BlogHttpService, public toastr:ToastrManager, private location:Location) { 
    console.log("view constructor is called");
  }

  ngOnInit(): void {
    console.log("view ngOnInit is called");
    //getting the blog Id from the route
    let myBlogId= this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function to get the blog ID out of overall blogs
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data=>{
        console.log(data);
        this.currentBlog=data['data'];

      },
      error=>{
        console.log("Some error occured");
        console.log(error.errorMessage);

      }
    )
  }

  public deleteThisBlog():any{

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data=>{
        console.log(data);
        this.toastr.successToastr('Blog Deleted Successfully','Success!');
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
  
      },
      error=>{
        console.log("Some Error occured");
        console.log(error.errorMessage);
        this.toastr.warningToastr('Some error occured');
  
      }
    )
    }

    public getBackToPreviousPage():any{
      this.location.back();
    }

  ngOnDestroy(): void {
    console.log("view ng OnDestroy is called");
  }

    
  
}
