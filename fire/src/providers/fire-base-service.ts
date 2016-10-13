import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
/*
  Generated class for the FireBaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
 const config = {
      apiKey: "AIzaSyAZz_6Tr4IAquLHhf3tEehfajRGvdE9R3I",
      authDomain: "fireblogger-4009a.firebaseapp.com",
      databaseURL: "https://fireblogger-4009a.firebaseio.com",
      storageBucket: "fireblogger-4009a.appspot.com",
      messagingSenderId: "1091019985936"
    };
@Injectable()
export class FireBaseService {
   public fRb:any;

 
  constructor(public http: Http) {
    firebase.initializeApp(config);
    this.fRb = firebase;
   
  
    console.log('Hello FireBaseService Provider');
  }

  p 

}
