import {UsersService} from '../providers/users-service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
// import firebase from 'firebase';
import {Login} from '../pages/login/login';

import { TabsPage } from '../pages/tabs/tabs';
  
  
@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp  {
  public rootPage: any;

 config = {
      apiKey: "AIzaSyAZz_6Tr4IAquLHhf3tEehfajRGvdE9R3I",
      authDomain: "fireblogger-4009a.firebaseapp.com",
      databaseURL: "https://fireblogger-4009a.firebaseio.com",
      storageBucket: "fireblogger-4009a.appspot.com",
      messagingSenderId: "1091019985936"
    };
//  private  rootPage : any;
//  implements OnInit OnInit 
 
  // ngOnInit(){
  // //       console.log('ngOnInit');
  // // firebase.initializeApp(config);
  // // firebase.auth().onAuthStateChanged((user)=>{
  // //    if(user)
  // //      this.rootPage = TabsPage;
  // //     else
  // //      this.rootPage = Login;
  // // })
  // }

 
  constructor(platform: Platform,usersService:UsersService) {
         
      this.rootPage = usersService.checkAuthentication()? TabsPage:Login;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
