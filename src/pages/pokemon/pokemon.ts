import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PokemonProvider } from '../../providers/pokemon/pokemon';


@Component({
  selector: 'page-pokemon',
  templateUrl: 'pokemon.html',
})
export class PokemonPage {
  pokemon:any;
  peso:any;
  altura:any;
  imagen:any;
  tipos:any;
  constructor(public navCtrl: NavController,
    private pokemonProvider: PokemonProvider, 
    public navParams: NavParams) {
    this.pokemon= this.navParams.get('pokemon');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PokemonPage');
    this.getInfo();
  }
  getInfo() {
    this.pokemonProvider.getImgUrl(this.pokemon.url).subscribe(
      (response: any) => {
        this.peso= response.weight;
        this.imagen=response.sprites.front_default;
        this.altura=response.height;
        this.tipos=response['types'];
        
      }, (error) => {
        console.log(error);
      })
}

}
