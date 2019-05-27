import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PokemonProvider } from '../../providers/pokemon/pokemon';
import { LoadingController } from 'ionic-angular';
import { PokemonPage } from '../pokemon/pokemon';


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pokemons: any = new Array;
  pokeImages: any = new Array();
  imagen: string;
  generacion: any;
  indice: number;
  presentLoading: any;
  prueba: any = new Map();


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private pokemonProvider: PokemonProvider,
    private loadingCtrl: LoadingController) {
    this.generacion = this.navParams.get('page');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PrincipalPage');
    this.presentLoading=this.loadingCtrl.create({
      spinner:'hide',
        content: 
          `<div class="carga">
            <img class="spinner" src="assets/imgs/pika.gif"/>
            <p>Cargando<br>Pokémons...</p>
          </div>`
      });
    this.presentLoading.present();
    this.getAllPokemons();
   
  }

  goPokemon(pokemon: any) {
    this.navCtrl.push(PokemonPage, { pokemon });
  }

  getAllPokemons() {
    
    if (this.generacion.component == 1) {
      this.indice = 0;
      this.pokemonProvider.getAllPokemons()
        .subscribe(
          (response: any) => {
            this.pokemons = response['results'];
            this.getImagen(0);
          }, (error) => {
            console.log(error);
          })
    }
    else if (this.generacion.component == 2) {
      this.indice = 151;
      this.pokemonProvider.getAllPokemons2()
        .subscribe(
          (response: any) => {
            this.pokemons = response['results'];
            this.getImagen(0);
          }
          , (error) => {
            console.log(error);
          })
    }
    else if (this.generacion.component == 3) {
      this.indice = 251;
      this.pokemonProvider.getAllPokemons3()
        .subscribe(
          (response: any) => {
            this.pokemons = response['results'];
            this.getImagen(0);
          }
          , (error) => {
            console.log(error);
          })
    }
    else if (this.generacion.component == 4) {
      this.indice = 386;
      this.pokemonProvider.getAllPokemons4()
        .subscribe(
          (response: any) => {
            this.pokemons = response['results'];
            this.getImagen(0);
          }
          , (error) => {
            console.log(error);
          })
    }
    else if (this.generacion.component == 5) {
      this.indice = 493;
      this.pokemonProvider.getAllPokemons5()
        .subscribe(
          (response: any) => {
            this.pokemons = response['results'];
            this.getImagen(0);
          }
          , (error) => {
            console.log(error);
          })
    }
    else if (this.generacion.component == 6) {
      this.indice = 649;
      this.pokemonProvider.getAllPokemons6()
        .subscribe(
          (response: any) => {
            this.pokemons = response['results'];
            this.getImagen(0);
          }
          , (error) => {
            console.log(error);
          })
    }
    if (this.generacion.component == 7) {
      this.indice = 721;
      this.pokemonProvider.getAllPokemons7()
        .subscribe(
          (response: any) => {
            this.pokemons = response['results'];
            this.getImagen(0);
          }
          , (error) => {
            console.log(error);
          })
    }

  }

  getImagen(index: number) {
    
    if (index < this.pokemons.length) {
      this.pokemonProvider.getImgUrl(this.pokemons[index].url).subscribe(
        (response: any) => {
          // this.pokeImages.push(response.sprites.front_default);
          this.prueba.set(this.pokemons[index].name, response.sprites.front_default);
          return this.getImagen(++index);
        }, (error) => {
          console.log(error);
        });
    }else{
      this.presentLoading.dismiss();
    }
  }

  getItems(ev) {

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.pokemons = this.pokemons.filter((poke) => {
        return (poke.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.getAllPokemons();
    }

  }
}
