import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
<<<<<<< HEAD
  private apiUrl='https://pokeapi.co/api/v2/pokemon';
=======
  private apiUrl='https://pokeapi.co/api/v2/pokemon?limit=150';
>>>>>>> 3c5862f889c906438f87b9bfe2f9d1d60e69a50d

  constructor(private http:HttpClient) {}

  getPokemon(name: string){
<<<<<<< HEAD
    return this.http.get(`${this.apiUrl}/${name}`).toPromise();
  }

  public getPokemonList(limit: number): Observable<{ results: any[] }> {
    return this.http.get<{ results: any[] }>(`${this.apiUrl}?limit=${limit}`);
=======
    return this.http.get(`${this.apiUrl}${name}`).toPromise();
  }

  public getPokemonList(): Observable<{ results: any[] }> {
    return this.http.get<{ results: any[] }>(this.apiUrl);
>>>>>>> 3c5862f889c906438f87b9bfe2f9d1d60e69a50d
  }
}
