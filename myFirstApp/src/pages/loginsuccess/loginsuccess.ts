import { Component } from '@angular/core';
import { NavController,NavParams,ViewController } from 'ionic-angular';

/*
  Generated class for the Loginsuccess page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loginsuccess',
  templateUrl: 'loginsuccess.html'
})
export class Loginsuccess {
    public buttonText :String;
  constructor(public navCtrl: NavController,private navParams:NavParams,private veiewCtrl:ViewController) {
    let myString = this.navParams.get('myString');
       this.buttonText = myString;
  }

  ionViewDidLoad() {
    console.log('Hello Loginsuccess Page');
  }

  pop(){
    this.veiewCtrl.dismiss({
      param:'Adam'
    });
  }

}
