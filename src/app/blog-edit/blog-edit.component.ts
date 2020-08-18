import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories= ["Comedy", "Thriller", "Technical", "Horror", "Drama","Action"];
  constructor(private _route:ActivatedRoute, private router: Router, public blogHttpService:BlogHttpService, public toastr:ToastrManager, vcr:ViewContainerRef) { }

  ngOnInit(): void {
    let myBlogId= this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function to get the blog ID out of overall blogs
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data=>{
        console.log(data);
        this.currentBlog=data['data'];
        console.log('current Blog is:');
        console.log(this.currentBlog);

      },
      error=>{
        console.log("Some error occured");
        console.log(error.errorMessage);

      }
    )
  }//end of on it

  public editThisBlog():any{

  this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
    data=>{
      console.log(data);
      this.toastr.successToastr('Blog Edited Successfully', 'Success!');
      setTimeout(()=>{
        this.router.navigate(['/blog',this.currentBlog.blogId]);
      },1000)

    },
    error=>{
      console.log("Some Error occured");
      console.log(error.errorMessage);
      this.toastr.warningToastr('Some error occured');

    }
  )
  }


}
