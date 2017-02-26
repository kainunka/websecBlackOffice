import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';
import { Storage } from '@ionic/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyBnQy94m5CafBYrzJUP6XY9HUQfsrajdMY",
  authDomain: "websec18plus-1cd63.firebaseapp.com",
  databaseURL: "https://websec18plus-1cd63.firebaseio.com",
  storageBucket: "websec18plus-1cd63.appspot.com",
  messagingSenderId: "199393777038"
}

export function provideStorage() {
  return new Storage(['sqlite', 'websql', 'indexeddb'], { name: '__mydb' });
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler,}, { provide: Storage, useFactory: provideStorage}]
})
export class AppModule {}
