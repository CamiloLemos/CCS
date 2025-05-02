import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { PokemonCardComponent } from "../../app/components/pokemon-card/pokemon-card.component";
import { PokemonPictureComponent } from "../../app/components/pokemon-picture/pokemon-picture.component";
import { PokemonService } from '../../app/services/pokemon.service';
import { Resultado } from '../../app/interfaces/pokeapi';
import { Pokemon } from '../../app/interfaces/pokemon';
import { PokemonDetailsComponent } from "../../app/components/pokemon-details/pokemon-details.component";
@Component({
  selector: 'app-home',
  imports: [PokemonCardComponent, PokemonPictureComponent, PokemonDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  constructor(private pokemonService:PokemonService){}
  @ViewChild('cards') cardsElement!:ElementRef;
  
  pokemonList:Resultado[]=[];
  page:number = 1;
  loading:boolean = false;
  //pokemonSelected?:Pokemon;
  detail:boolean=false;
  selectedPokemon?:Pokemon;

  ngOnInit(): void {
  this.loadList();
  this.pokemonService.getById("1");
    
  }

  async loadList(){

    this.loading = true;
    this.pokemonList = [...this.pokemonList,  ...await this.pokemonService.getByPage(this.page)];
    this.loading = false;
    this.page++;
    this.pokemonList=[...this.pokemonList, ...await this.pokemonService.getByPage(this.page)]
    
  }


  onScroll(e:any){
    if(this.loading) return;
    if(
      Math.round(
        this.cardsElement.nativeElement.clientHeight + this.cardsElement.nativeElement.scrollTop
        )
        === e.srcElement.scrollHeight){
        this.loadList();
      }

  }
  async clickedCard(id:string){
    if(this.selectedPokemon && id ===this.selectedPokemon?.id.toString()){
      return this.stateChange();
    }
    
    this.selectedPokemon = await this.pokemonService.getById(id);
  }
  stateChange(){
    if(this.selectedPokemon) this.detail=!this.detail;
  }
}