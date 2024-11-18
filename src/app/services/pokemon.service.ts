import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl='https://pokeapi.co/api/v2/pokemon/';

  constructor(private htt:HttpClient) {}

  getPokemon(name: string){
    return this.htt.get(`${this.apiUrl}${name}`).toPromise();
  }
}
