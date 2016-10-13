import { Component,OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase';
import { Login } from './../pages/login/login';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp implements OnInit {

 private  rootPage : any;
 
 
  ngOnInit(){
        console.log('ngOnInit');
  firebase.initializeApp({
    apiKey: "AIzaSyAZz_6Tr4IAquLHhf3tEehfajRGvdE9R3I",
    authDomain: "fireblogger-4009a.firebaseapp.com",
    databaseURL: "https://fireblogger-4009a.firebaseio.com",
    storageBucket: "fireblogger-4009a.appspot.com",
    messagingSenderId: "1091019985936"
  });
  firebase.auth().onAuthStateChanged((user)=>{
     if(user)
       this.rootPage = TabsPage;
      else
       this.rootPage = Login;
  })
  }

 
  constructor(platform: Platform) {
    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
