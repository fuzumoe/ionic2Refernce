import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Posts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class Posts {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Posts Page');
  }

}
