import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";

import { AppComponent } from './app.component';

const firebaseConfig = {
    apiKey: "AIzaSyDKQN9XrUs0y_ETc1IaLjrrML4z8K7y03k",
    authDomain: "login-sample-d8370.firebaseapp.com",
    databaseURL: "https://login-sample-d8370.firebaseio.com",
    storageBucket: "login-sample-d8370.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
      // method: AuthMethods.Redirect
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
