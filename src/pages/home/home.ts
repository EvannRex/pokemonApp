import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,menu: MenuController) {
      menu.enable(true);
  }
  goPrincipal(){
    this.navCtrl.push(PrincipalPage);
  }
}
