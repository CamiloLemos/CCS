import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage(){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=0&offset=10")
    const responseJson = await res.json();
    console.log(responseJson);
    return responseJson;
  }

  getById(){
    "https://pokeapi.co/api/v2/pokemon"
  }

  getDescription(){}
}
