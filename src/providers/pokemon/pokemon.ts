import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonProvider {
   
  constructor(private http: HttpClient) {
  }
  getAllPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
  }
  getAllPokemons2(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=151&limit=100')
  }
  getAllPokemons3(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=251&limit=135')
  }
  getAllPokemons4(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=386&limit=107')
  }
  getAllPokemons5(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=493&limit=156')
  }
  getAllPokemons6(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=649&limit=72')
  }
  getAllPokemons7(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=721&limit=86')
  }
  getImgUrl(url: string){
    return this.http.get(url)
  }
}
