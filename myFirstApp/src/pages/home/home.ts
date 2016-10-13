 
import { Component } from '@angular/core';
import { NavController, AlertController,ModalController } from 'ionic-angular';
import { Loginsuccess } from './../loginsuccess/loginsuccess';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 
})
export class HomePage {

  public  currentTime ;
  public newTime;
  public recievedData:String;
  constructor(public navCtrl: NavController,
  private alertCtrl: AlertController,private modalCtrl :ModalController){
    this.currentTime = new Date().getFullYear();
  }
  
  travel(){
  this.newTime = this.getRandomInt(1000,4000);
  }
 
  
  login(){
    let modal = this.modalCtrl.create(Loginsuccess,{
      myString:'adam'
    });
    modal.onDidDismiss(data => {
       this.recievedData = data.param;
    });
       modal.present();
    // this.navCtrl.push(Loginsuccess,{
    //   myString:"Adam"
    // });
  }

  
  showAlert(){
   let alert = this.alertCtrl.create({
     title: 'Hello there!',
     subTitle:'Hi there, here is the message',
     buttons:[
       {
         text:'dismis'
       }
     ]

   });
   alert.present();
  }

  private getRandomInt(min:number,max:number):number{
    return Math.floor(Math.random()*(max-min+1))+min;
  }

}

