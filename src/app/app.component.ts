import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(

    private platform:Platform,
    private statusbar:StatusBar,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();
  }
  initializeApp(){
    this.platform.ready().then(() => {
      this.statusbar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
  

