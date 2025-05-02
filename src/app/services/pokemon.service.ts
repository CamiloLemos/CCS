import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor() { }

  async getByPage(page:number, size: number = 40):Promise<Resultado[]>{
    if(page > 5) return [];
    const offset = size*(page-1);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`)
    const resJson = await res.json();
    if(resJson.results.length > 0) return resJson.results
    return [];
  }


  async getById(id: string): Promise<any> {
    try {
      const res = await fetch(`${this.baseUrl}/${id}`);
      const restJson = await res.json();
      return restJson;
    } catch (error) {
      console.error('Error fetching Pokémon by ID:', error);
      return null;
    }
  }

  // Método sugerido para obtener la descripción de un Pokémon
  async getDescription(id:string | number):Promise<string>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto:any) =>  texto.language.name === "es")
    return texto.flavor_text;
  }

  
}
