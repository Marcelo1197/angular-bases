import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts';
import { PostRoutingModule } from './post-routing-module';
import { Post } from './post/post';

@NgModule({
  declarations: [
    PostsComponent,
    Post
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostsModule { }
