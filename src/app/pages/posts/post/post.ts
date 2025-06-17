import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {

  @Input() postData: any;
  @Output() postClickedEvent = new EventEmitter<number>();

  onPostClick() {
    // onPostClick is called when (click) native event is triggered
    // then we manually emit our custom event postClickedEvent
    this.postClickedEvent.emit(this.postData.id);
  }
}