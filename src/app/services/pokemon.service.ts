import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl='https://pokeapi.co/api/v2/pokemon';

  constructor(private http:HttpClient) {}

  getPokemon(name: string){

    return this.http.get(`${this.apiUrl}/${name}`).toPromise();
  }

  public getPokemonList(limit: number): Observable<{ results: any[] }> {
    return this.http.get<{ results: any[] }>(`${this.apiUrl}?limit=${limit}`);
  }

}
