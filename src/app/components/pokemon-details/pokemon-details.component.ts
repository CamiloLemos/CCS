import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import {Pokemon} from "../../interfaces/pokemon"
import { PokemonService } from '../../services/pokemon.service';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnChanges {
  constructor(private pokemonService:PokemonService){}
  ngOnChanges(): void {
    if(this.pokemon){
    this.pokemonService.getDescription(this.pokemon?.id).then(res =>(this.description = res))
  }
  }
  @Input() pokemon?:Pokemon;
  @Input() open: boolean= false;
  @Output() clicked = new EventEmitter();
  description:string="";

}
