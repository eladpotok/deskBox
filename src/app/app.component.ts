import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireAuth } from 'angularfire2/auth'
import { AuthService } from '../services/auth.service';
import { QrilustrationPage } from '../pages/qrilustration/qrilustration';import {  NavController } from 'ionic-angular';

@Component({

  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = QrilustrationPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public afAuth: AngularFireAuth,
  public auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
     
    });
  }

  
}

