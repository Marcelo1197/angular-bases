import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {
  routes: any[] = [
    {
      path: '/about',
      label: 'About',
    },
    {
      path: '/contact',
      label: 'Contact',
    },
    {
      path: '/posts',
      label: 'Posts',
    }
  ];
}
