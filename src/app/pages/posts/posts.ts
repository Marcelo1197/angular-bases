import { Component } from '@angular/core';
import { Data } from '../../services/data';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class PostsComponent {

  posts: any;

  constructor(private dataService: Data ) {}

  ngOnInit() {
    // console.log('PostsComponent initialized');
    this.posts = this.dataService.getPosts();
  }

  onPostClickedHandler(postId: number){
    console.log('Post clicked with ID:', postId);
  }
}