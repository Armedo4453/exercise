import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExercisePhysiqueModule } from './exercice-physique/exercice-physique.module';
import { BicepsComponent } from './exercice-physique/biceps/biceps.component';
import { InterceptInterceptor } from './intercept.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    BicepsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ExercisePhysiqueModule,

    RouterModule.forRoot([



  ])
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: InterceptInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }