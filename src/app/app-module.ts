import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu/menu';
import { PagesModule } from './pages/pages-module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
