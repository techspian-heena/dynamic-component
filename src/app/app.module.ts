import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { GuestCardComponent } from './guest-card/guest-card.component';
import { UsreCardComponent } from './usre-card/usre-card.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    GuestCardComponent,
    UsreCardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [  
    Page1Component,
    Page2Component,
    GuestCardComponent,
    UsreCardComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
