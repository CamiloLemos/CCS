import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-picture',
  imports: [],
  templateUrl: './pokemon-picture.component.html',
  styleUrl: './pokemon-picture.component.scss'
})
export class PokemonPictureComponent {

  @Input() pokemon?:Pokemon;

}
