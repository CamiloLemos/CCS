import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Resultado } from '../../interfaces/pokeapi';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service'; // Ajusta según tu estructura
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-card',
  standalone: true, // Esto permite usar `imports` directamente en el componente
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnChanges {
  @Input() data?: Resultado;
  @Input() selected:boolean=false;
  @Input()  fulldata?:Pokemon;
  
  @Output() clicked =new EventEmitter<string>();

  id: string = "0";

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.infoExtractor();
  }

  private infoExtractor(): void {
    if (this.data && this.data.url !=="") {
      this.id = this.data.url.substring(34, this.data.url.length - 1);
      this.pokemonService.getById(this.id);
    }
    if (this.fulldata) {
      this.id = this.fulldata.species.url.substring(42, this.fulldata.species.url.length - 1);
      this.data ={
        name:this.fulldata.species.name,
        url:""
      };
    }
  }
}
