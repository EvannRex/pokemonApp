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
  fortalezas: any= new Array();
  debilidades: any= new Array();
  constructor(public navCtrl: NavController,
    private pokemonProvider: PokemonProvider, 
    public navParams: NavParams) {
    this.pokemon= this.navParams.get('pokemon');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokemonPage');
    this.getInfo();
  }
  getInfo() {
    let index: number=0;
    this.pokemonProvider.getImgUrl(this.pokemon.url).subscribe(
      (response: any) => {
        this.peso= response.weight;
        this.imagen=response.sprites.front_default;
        this.altura=response.height;
        this.tipos=response['types'];
        while(index < this.tipos.length){
          this.pokemonProvider.getImgUrl(this.tipos[index].type.url).subscribe(
            (response2:any)=>{
              for (let index = 0; index < response2.damage_relations.double_damage_from.length; index++) {
                this.debilidades.push(response2.damage_relations.double_damage_from[index])
              }
              for (let index = 0; index < response2.damage_relations.double_damage_to.length; index++) {
                this.fortalezas.push(response2.damage_relations.double_damage_to[index])
              }
              
            },(error2)=>{
              console.log(error2);
            })
          index=index+1;
        };

        
      }, (error) => {
        console.log(error);
      })
}

}
