import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
    this.pages = [
      { title: 'Primera Generación', component: 1 },
      { title: 'Segunda Generación', component: 2 },
      { title: 'Tercera Generación', component: 3 },
      { title: 'Cuarta Generación', component: 4 },
      { title: 'Quinta Generación', component: 5 },
      { title: 'Sexta Generación', component: 6 },
      { title: 'Septima Generación', component: 7 },
      { title: 'Salir', component: 8 }
    ];
  }
  goPage(page){
    if(page.component==8){
      this.nav.setRoot(HomePage);
    }else{
      this.nav.setRoot(PrincipalPage,{page});
    }
  }
  
}

