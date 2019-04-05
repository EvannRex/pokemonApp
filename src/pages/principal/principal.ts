import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokemonProvider} from '../../providers/pokemon/pokemon';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pokemons: any= new Array;
  pokeImages: any = new Array();
  imagen: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private pokemonProvider: PokemonProvider) {
    //llenado de arreglo pokemons
    this.pokemonProvider.getAllPokemons()
    .subscribe(
      (response:any)=>{this.pokemons= response['results'];
      console.log(this.pokemons);
      this.pokemons.forEach(element => {
        this.pokemonProvider.getImgUrl(element.url).subscribe(
          (response: any)=>{
            this.imagen= response.sprites.front_default;
            this.pokeImages.push(this.imagen);
          },(error)=>{
            console.log(error);
          });
      });
      console.log(this.pokeImages);
     }
      ,(error) =>{
        console.log(error);
    })
    //llenado de arreglo de pokeImages
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

}
