import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from './../pages/login/login';
import { Posts } from './../pages/posts/posts';
import { ResetPassword } from './../pages/reset-password/reset-password';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Posts,
    ResetPassword
  ],
  imports: [
    IonicModule.forRoot(MyApp)
       

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Posts,
    ResetPassword
  ],
  providers: []
})
export class AppModule {}
