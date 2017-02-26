import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  local: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.local = new Storage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(code) {
    if (code == "websex18plusSecurity") {

      this.local.set('code', 'websex18plusSecurity');
      this.navCtrl.setRoot(HomePage);

    } else {
      let prompt = this.alertCtrl.create({
        title: 'Error Code',
        message: 'Code Faild!',
        buttons: [
          {
            text: "OK",
            handler: data => {
              console.log("Canncel");
            }
          }
        ]
      });

      prompt.present();
    }
  }

}
