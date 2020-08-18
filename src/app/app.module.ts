import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { from, combineLatest } from 'rxjs';
import { componentFactoryName } from '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';

//import statement for service
import {BlogService} from "./blog.service";
import {BlogHttpService} from "./blog-http.service";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule} from 'ng6-toastr-notifications';

//decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //router moodule forRoot method to declare the possible routes
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch:'full'},
      { path: 'create', component: BlogCreateComponent },
      { path: 'edit/:blogId', component: BlogEditComponent },
      { path: 'blog/:blogId', component: BlogViewComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', component: NotFoundComponent}
    ])
  ],
  exports: [RouterModule],
  providers: [BlogService, BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
