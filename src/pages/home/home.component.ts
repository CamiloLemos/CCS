import { Component } from '@angular/core';
import { PokemonCardComponent } from "../../app/components/pokemon-card/pokemon-card.component";
import { PokemonPictureComponent } from "../../app/components/pokemon-picture/pokemon-picture.component";

@Component({
  selector: 'app-home',
  imports: [PokemonCardComponent, PokemonPictureComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
