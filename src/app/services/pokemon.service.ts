import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/infoPokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  infoPokemon:any = {};

  constructor( public http:HttpClient ) { }
  
  
  public getPokemonInfo( id:number){
    return this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${id} ` );
  }
    
    

}
