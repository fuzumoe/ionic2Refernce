import {Mypipe} from '../pipes/mypipe';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Loginsuccess } from './../pages/loginsuccess/loginsuccess';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Mypipe,
    Loginsuccess
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Loginsuccess
  ],
  providers: []
})
export class AppModule {}
