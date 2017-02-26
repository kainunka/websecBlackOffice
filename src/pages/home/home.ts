import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import "rxjs/add/operator/map";
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  clip: FirebaseListObservable<any>;
  javUn: FirebaseListObservable<any>;
  javCen: FirebaseListObservable<any>;
  euR: FirebaseListObservable<any>;

  tagDataClip: any;
  tagDataJavUn: any;
  tagDataJavCen: any
  tagDataEur: any;
  checkData: any;

  tag1: any; tag2: any; tag3: any; tag4: any; tag5: any;
  tag6: any; tag7: any; tag8: any; tag9: any; tag10: any;
  tag11: any; tag12: any; tag13: any; tag14: any; tag15: any;
  tag16: any; tag17: any;
  pb: any;
  name: any; urlCover: any;
  urlVideo: any; description: any;
  category: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public angFire: AngularFire) {
    this.clip = angFire.database.list('/Websex/clip');
    this.javUn = angFire.database.list('/Websex/uncen');
    this.javCen = angFire.database.list('/Websex/cen');
    this.euR = angFire.database.list('/Websex/eur');

    this.tag1 = false; this.tag2 = false; this.tag3 = false;
    this.tag4 = false; this.tag5 = false; this.tag6 = false;
    this.tag7 = false; this.tag8 = false; this.tag9 = false;
    this.tag10 = false; this.tag11 = false; this.tag12 = false;
    this.tag13 = false; this.tag14 = false; this.tag15 = false;
    this.tag16 = false; this.tag17 = false;
    this.pb = false;

    this.name = null; this.urlCover = null;
    this.urlVideo = null; this.description = null;
    this.category = null;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  onChange(value) {

    console.log(value);

    if (value == 'Clip') {
      this.checkData = 'Clip';
      this.tagDataJavUn = null;
      this.tagDataJavCen = null;
      this.tagDataEur = null;

      this.tagDataClip = [{
        tag: 'ไทย (Thai)' }, { tag: 'ญี่ปุ่น (Japan)' }, { tag: 'เกาหลี, จีน (Korea, Chinese)' }, {
        tag: 'ฝรั่ง (Europe)' }, { tag: 'หลุดวัยรุ่น, นักศึกษา (College)' }, { tag: 'โชว์หน้ากล้อง (Camera, Webcam)' }, {
        tag: 'การ์ตูน (Doujin)'
      }]

    } else if (value == 'JAV Collector (UNCENSORED)') {
      this.checkData = 'JavUn';
      this.tagDataClip = null;
      this.tagDataJavCen = null;
      this.tagDataEur = null;

      console.log(this.tagDataClip);

      this.tagDataJavUn = [{
        tag: 'นมใหญ่ (Big Tits)' }, { tag: 'เอาคาชุด (Clothes)' }, { tag: 'คอสเพลย์ (Cosplay)' }, {
        tag: 'แตกใน (Creampie)' }, { tag: 'ครอบครัว (Incest)' }, { tag: 'โลลิ (Loli)' }, {
        tag: 'ชุดแม่บ้าน (Miads)' }, { tag: 'สาวนวด (Message)' }, { tag: 'สาวรุ่นใหญ่ (Milf)' }, {
        tag: 'ชุดพยาบาล (Nurses)' }, { tag: 'ชุดออฟฟิศ (Office)' }, { tag: 'พี่น้อง (Sister)' }, {
        tag: 'ชุดว่ายน้ำ (Swimsuit)' }, { tag: 'คุณครู (Teacher)' }, { tag: 'นมเล็ก (Tiny Tits)' }, {
        tag: 'ถ่ายแบบ (Softcore)' }, { tag: 'สาววัยรุ่นน่ารัก (Teen)'
      }]

    } else if (value == 'JAV Collector (CENSORED)') {
      this.checkData = 'JavCen';
      this.tagDataClip = null;
      this.tagDataJavUn = null;
      this.tagDataEur = null;

      this.tagDataJavCen = [{
        tag: 'นมใหญ่ (Big Tits)' }, { tag: 'เอาคาชุด (Clothes)' }, { tag: 'คอสเพลย์ (Cosplay)' }, {
        tag: 'แตกใน (Creampie)' }, { tag: 'ครอบครัว (Incest)' }, { tag: 'โลลิ (Loli)' }, {
        tag: 'ชุดแม่บ้าน (Miads)' }, { tag: 'สาวนวด (Message)' }, { tag: 'สาวรุ่นใหญ่ (Milf)' }, {
        tag: 'ชุดพยาบาล (Nurses)' }, { tag: 'ชุดออฟฟิศ (Office)' }, { tag: 'พี่น้อง (Sister)' }, {
        tag: 'ชุดว่ายน้ำ (Swimsuit)' }, { tag: 'คุณครู (Teacher)' }, { tag: 'นมเล็ก (Tiny Tits)' }, {
        tag: 'ถ่ายแบบ (Softcore)' }, { tag: 'สาววัยรุ่นน่ารัก (Teen)'
      }]

    } else if (value == 'Europe Collector') {
      this.checkData = 'JavEur';
      this.tagDataClip = null;
      this.tagDataJavUn = null;
      this.tagDataJavCen = null;

      this.tagDataEur = [{
        tag: 'นมใหญ่ (Big Tits)'
      }]
    }
  }




  clickAddClip(name, urlCover, urlVideo, description, category, tag1, tag2, tag3, tag4, tag5, tag6, tag7, pb) {

    if (name == null || name == '' ||
        urlCover == null || urlCover == '' ||
        urlVideo == null || urlVideo == '' ||
        description == null || description == '' ||
        category == null || category == '') {

      let prompt = this.alertCtrl.create({
        title: 'Error Input',
        message: 'Please Input Field!',
        buttons: [
          {
            text: "Canncel",
            handler: data => {
              console.log("Canncel");
            }
          }
        ]
      });

      prompt.present();

    } else if (tag1 == false && tag2 == false && tag3 == false && tag4 == false && tag5 == false && tag6 == false && tag7 == false) {
      let prompt = this.alertCtrl.create({
        title: 'Error CheckBox',
        message: 'Please Checkbox',
        buttons: [
          {
            text: "Canncel",
            handler: data => {
              console.log("Canncel");
            }
          }
        ]
      });

      prompt.present();

    } else {

        this.clip.push({
          name: name, urlCover: urlCover, urlVideo: urlVideo,
          description: description, category: category,
          Thai: tag1, Japan: tag2, KoreaChinese: tag3,
          Europe: tag4, College: tag5, CameraWebcam: tag6,
          Doujin: tag7, public: pb
        }).then((res) => {
          let prompt = this.alertCtrl.create({
            title: 'Success',
            message: 'Add Clip Success',
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
        });

    }

  }


  clickAddJavUn(name, urlCover, urlVideo, description, category, tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, tag10, tag11, tag12, tag13, tag14, tag15, tag16, tag17, pb) {

    if (name == null || name == '' ||
        urlCover == null || urlCover == '' ||
        urlVideo == null || urlVideo == '' ||
        description == null || description == '' ||
        category == null || category == '') {

      let prompt = this.alertCtrl.create({
        title: 'Error Input',
        message: 'Please Input Field!',
        buttons: [
          {
            text: "Canncel",
            handler: data => {
              console.log("Canncel");
            }
          }
        ]
      });

      prompt.present();

    } else if (tag1 == false && tag2 == false && tag3 == false && tag4 == false && tag5 == false && tag6 == false && tag7 == false && tag8 == false && tag9 == false && tag10 == false && tag11 == false && tag12 == false && tag13 == false && tag14 == false && tag15 == false && tag16 == false && tag17 == false) {
      let prompt = this.alertCtrl.create({
        title: 'Error CheckBox',
        message: 'Please Checkbox',
        buttons: [
          {
            text: "Canncel",
            handler: data => {
              console.log("Canncel");
            }
          }
        ]
      });

      prompt.present();

    } else {

        this.javUn.push({
          name: name, urlCover: urlCover, urlVideo: urlVideo,
          description: description, category: category,
          BigTits: tag1, Clothes: tag2, Cosplay: tag3,
          Creampie: tag4, Incest: tag5, Loli: tag6,
          Miads: tag7, Message: tag8, Milf: tag9,
          Nurses: tag10, Office: tag11, Sister: tag12,
          Swimsuit: tag13, Teacher: tag14, TinyTits: tag15,
          Softcore: tag16, Teen: tag17, public: pb
        }).then((res) => {
          let prompt = this.alertCtrl.create({
            title: 'Success',
            message: 'Add Clip Success',
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
        });

    }

  }


  clickAddJavCen(name, urlCover, urlVideo, description, category, tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, tag10, tag11, tag12, tag13, tag14, tag15, tag16, tag17, pb) {

    if (name == null || name == '' ||
        urlCover == null || urlCover == '' ||
        urlVideo == null || urlVideo == '' ||
        description == null || description == '' ||
        category == null || category == '') {

      let prompt = this.alertCtrl.create({
        title: 'Error Input',
        message: 'Please Input Field!',
        buttons: [
          {
            text: "Canncel",
            handler: data => {
              console.log("Canncel");
            }
          }
        ]
      });

      prompt.present();

    } else if (tag1 == false && tag2 == false && tag3 == false && tag4 == false && tag5 == false && tag6 == false && tag7 == false && tag8 == false && tag9 == false && tag10 == false && tag11 == false && tag12 == false && tag13 == false && tag14 == false && tag15 == false && tag16 == false && tag17 == false) {
      let prompt = this.alertCtrl.create({
        title: 'Error CheckBox',
        message: 'Please Checkbox',
        buttons: [
          {
            text: "Canncel",
            handler: data => {
              console.log("Canncel");
            }
          }
        ]
      });

      prompt.present();

    } else {

        this.javCen.push({
          name: name, urlCover: urlCover, urlVideo: urlVideo,
          description: description, category: category,
          BigTits: tag1, Clothes: tag2, Cosplay: tag3,
          Creampie: tag4, Incest: tag5, Loli: tag6,
          Miads: tag7, Message: tag8, Milf: tag9,
          Nurses: tag10, Office: tag11, Sister: tag12,
          Swimsuit: tag13, Teacher: tag14, TinyTits: tag15,
          Softcore: tag16, Teen: tag17, public: pb
        }).then((res) => {
          let prompt = this.alertCtrl.create({
            title: 'Success',
            message: 'Add Clip Success',
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
        });

    }

  }


  clickAddEur(name, urlCover, urlVideo, description, category, tag1, pb) {

    if (name == null || name == '' ||
        urlCover == null || urlCover == '' ||
        urlVideo == null || urlVideo == '' ||
        description == null || description == '' ||
        category == null || category == '') {

      let prompt = this.alertCtrl.create({
        title: 'Error Input',
        message: 'Please Input Field!',
        buttons: [
          {
            text: "Canncel",
            handler: data => {
              console.log("Canncel");
            }
          }
        ]
      });

      prompt.present();

    } else if (tag1 == false) {
      let prompt = this.alertCtrl.create({
        title: 'Error CheckBox',
        message: 'Please Checkbox',
        buttons: [
          {
            text: "Canncel",
            handler: data => {
              console.log("Canncel");
            }
          }
        ]
      });

      prompt.present();

    } else {

        this.euR.push({
          name: name, urlCover: urlCover, urlVideo: urlVideo,
          description: description, category: category,
          BigTits: tag1, public: pb
        }).then((res) => {
          let prompt = this.alertCtrl.create({
            title: 'Success',
            message: 'Add Clip Success',
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
        });

    }

  }




}
