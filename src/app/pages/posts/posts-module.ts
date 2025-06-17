import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts';
import { PostRoutingModule } from './post-routing-module';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostsModule { }
