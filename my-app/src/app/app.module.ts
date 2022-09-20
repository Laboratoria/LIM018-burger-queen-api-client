import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './services/app.component';
import {provideAuth, getAuth} from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    ReactiveFormsModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideAuth(()=>getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


