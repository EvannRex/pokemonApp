import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokemonProvider } from '../../providers/pokemon/pokemon';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pokemons: any = new Array;
  pokeImages: any = new Array();
  imagen: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private pokemonProvider: PokemonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
    this.getAllPokemons();
  }

  goHome() {
    this.navCtrl.popToRoot();
  }
  getAllPokemons() {
    this.pokemonProvider.getAllPokemons()
      .subscribe(
        (response: any) => {
          this.pokemons = response['results'];
          
          // this.pokemons.map(pokemon =>{
          //   this.getImagen(pokemon.url);
          // });
          this.getImagen(0);
          console.log("nombres",this.pokemons);
          console.log("imagenes",this.pokeImages);
        }
        , (error) => {
          console.log(error);
        })
  }

  getImagen(index:number) {
      this.pokemonProvider.getImgUrl(this.pokemons[index].url).subscribe(
        (response: any) => {
          this.pokeImages.push(response.sprites.front_default);
          if(index < this.pokemons.length-1){
            this.getImagen(++index);
          }
        }, (error) => {
          console.log(error);
        })
  }

}
