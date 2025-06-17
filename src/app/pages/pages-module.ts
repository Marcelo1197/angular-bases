import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
