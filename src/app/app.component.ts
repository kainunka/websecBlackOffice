import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;;
  local: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, storage: Storage) {
    this.initializeApp();
    this.local = new Storage();


     // Or to get a key/value pair



    // used for an example of ngFor and navigation


  }

  initializeApp() {
    this.platform.ready().then(() => {


      this.local.get('code').then((val) => {

        if (val == null) {
          this.rootPage = LoginPage;
        } else if (val == 'websex18plusSecurity') {
          this.rootPage = HomePage;
        }
        console.log('Your code is', val);
      })
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
