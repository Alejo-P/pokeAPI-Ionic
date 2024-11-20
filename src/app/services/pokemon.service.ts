import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl='https://pokeapi.co/api/v2/pokemon';

  constructor(private http:HttpClient) {}

  // Obtener un pokemon por su nombre
  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${name}`);
  }

  // Obtener una lista de pokemons
  public getPokemonList(limit: number): Observable<{ results: any[] }> {
    return this.http.get<{ results: any[] }>(`${this.apiUrl}?limit=${limit}`);
  }

  // Obtener un pokemon por url
  public getPokemonByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }

}
