import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  private readonly API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150'; // constante inmutable
  public pokemonList: any[] = []; // tipado más específico
  public isLoading = false; // indicador de carga
  public searchTerm = ''; // término de búsqueda
  public search = (
    event: CustomEvent
  ) => {}; // término de búsqueda

  constructor(private pokemonService : PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }


public getPokemonList(): void {
  this.isLoading = true;
  this.pokemonService.getPokemonList()
    .subscribe({
      next: (data) => {
        this.pokemonList = data.results;
        console.log(this.pokemonList);
      },
      error: (err) => {
        console.error('Error fetching Pokémon list:', err);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
}
}
