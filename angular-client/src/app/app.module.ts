import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingCurtainComponent } from './components/landing-curtain/landing-curtain.component';
import { TheatreShowcaseMdComponent } from './components/theatre-showcase-md/theatre-showcase-md.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingCurtainComponent,
    TheatreShowcaseMdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
