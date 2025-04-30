import { Component, OnInit } from '@angular/core';
import { PokemonCardComponent } from "../../app/components/pokemon-card/pokemon-card.component";
import { PokemonPictureComponent } from "../../app/components/pokemon-picture/pokemon-picture.component";
import { PokemonService } from '../../app/services/pokemon.service';

@Component({
  selector: 'app-home',
  imports: [PokemonCardComponent, PokemonPictureComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  constructor(private pokemonService:PokemonService){}
  
  pokemonList=[];

  ngOnInit(): void {
  this.loadList();
    
  }

  async loadList(){
    this.pokemonList=[...this.pokemonList, ...await this.pokemonService.getBypage()]
    
  }

}
