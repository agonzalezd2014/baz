import { Component, OnInit } from '@angular/core';
import { PokemonService} from 'src/app/services/pokemon.service'
import { PokemonResponse, DreamWorld } from '../../interfaces/infoPokemon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public patternBackground:string  = 'assets/bg-pattern-card.svg' 
  min:number = 1;
  max:number = 100;
  currentPokemon:number  = 1
 
  currentImage: any ;

  infoPokemon!: PokemonResponse;

  constructor( public pokemonService:PokemonService ) { }

  ngOnInit(): void {
    
    this.getInfoPokemon();
    
  }

  public getInfoPokemon(){
    
    this.pokemonService.getPokemonInfo( this.currentPokemon ).subscribe((info:PokemonResponse) =>{
      this.infoPokemon = info ;
      this.currentImage = this.infoPokemon.sprites.other?.dream_world.front_default;
      
    });
  }
  
  nextPokemon(){
    this.currentPokemon = this.currentPokemon + 1;
    this.getInfoPokemon()

  }
  previousPokemon(){
    if( this.currentPokemon  >= 2 ){
      this.currentPokemon = this.currentPokemon - 1;
      this.getInfoPokemon()
      
    }
    
  }

}
