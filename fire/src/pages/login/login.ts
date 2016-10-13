import {ModalController, NavController} from 'ionic-angular';
import { Component, } from '@angular/core';
 import {Register} from '../register/register';
import { UsersService } from './../../providers/users-service';
 
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
 
  public user = { 
    emailField:"",
    passwordField:""
  }
  constructor(public navCtrl: NavController,
              private userService:UsersService,
              private modalCtrl:ModalController) {
    
      this.ionViewDidLoad();
  }
   
  ionViewDidLoad() {
    console.log('Hello Login Page');
  }
  public doLogin( ){
    console.log("doing login");
     console.log(this.user);
    
  }

  public doSignUp(){
    console.log("doing sign up");
     this.navCtrl.push(Register);
    // this.modalCtrl.create(Register).present();
  }
}
