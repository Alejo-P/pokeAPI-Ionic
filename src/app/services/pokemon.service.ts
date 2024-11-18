import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150';

  constructor(private http: HttpClient) {}

  public getPokemonList(): Observable<{ results: any[] }> {
    return this.http.get<{ results: any[] }>(this.API_URL);
  }
}
