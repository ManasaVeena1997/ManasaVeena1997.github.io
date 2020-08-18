import { Injectable } from '@angular/core';
//importing http client to make the requests
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
//impost Observable realated code
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl= 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken= "ZGE5OGYzYTE3MTIxZTY3MDJkODUzNjU5NTE3MWEwN2NlNTdlNTEzNDcyOGZkMTIyYjU1NzE4Y2UzMGFlZmFmODg3NDhlOTNiYjY5ZTJkZDdmYzI3NGI1NGQ1ZDA0YjM0ZjcxOGU2Y2U0OTExNTI4YjIwMzQ2Y2NhZWI0MmY0Mzk2NA==";

  constructor(private _http:HttpClient) { 
    console.log("Blog Http service Constructor was called");

  }

  private handleError(err:HttpErrorResponse){
    console.log("Handle Error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);

  }

  public getAllBlogs(): any{
    
    let myResponse=this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
    console.log(myResponse);
    return myResponse;

  }

  public getSingleBlogInformation(currentBlogId):any{
    let myResponse=this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken='+this.authToken);
    return myResponse;

    }

  public createBlog(blogData):any{
    let myResponse=this._http.post(this.baseUrl+'/create'+'?authToken='+this.authToken, blogData);
    return myResponse;

    }  
    
  public deleteBlog(blogId):any{
    let data = {};
    let myResponse=this._http.post(this.baseUrl+'/'+blogId+'/delete?authToken='+this.authToken, data);
    return myResponse;

    } 
    
  public editBlog(blogId,blogData):any{
    let myResponse=this._http.put(this.baseUrl+'/'+blogId+'/edit?authToken='+this.authToken, blogData);
    return myResponse;

    } 

  

  
  }

