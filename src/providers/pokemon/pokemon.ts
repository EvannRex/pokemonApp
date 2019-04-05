import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonProvider {
   
  constructor(private http: HttpClient) {
  }
  getAllPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=200');
  }
  getImgUrl(url: string){
    return this.http.get(url);
  }
}
