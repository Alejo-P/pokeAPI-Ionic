import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  searchTerm: string = ''; // Para almacenar el término de búsqueda
  errorMessage: string | null = null; // Para manejar mensajes de error
  pokemonDetails: any = null; // Para almacenar los detalles del Pokémon
  listPokemon: any[] = []; // Para almacenar la lista de Pokémon
  public isLoading = false; // indicador de carga
  constructor(private pokemonService: PokemonService) {} // Inyecta el servicio de Pokémon

  ngOnInit(): void {
    this.getPokemonList();
  }

  public getPokemonList(): void {
    this.isLoading = true;
    this.pokemonService.getPokemonList(50)
      .subscribe({
        next: (data) => {
          for (const pokemon of data.results) {
            this.getInfoPokemon(pokemon.url)
              .then((res) => {
                this.listPokemon.push(res);
              })
              .catch((err) => {
                console.error('Error fetching Pokémon:', err);
              });
          }
          console.log(this.listPokemon);
        },
        error: (err) => {
          console.error('Error fetching Pokémon list:', err);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  async getInfoPokemon(url: string) {
    try {
      const pokemon = await this.pokemonService.getPokemonByUrl(url).toPromise();
      return pokemon;
    } catch (error) {
      return 'No se pudo encontrar el Pokémon. Verifica el nombre e intenta nuevamente.';
    }
  };

  // Método para buscar un Pokémon por su nombre
  async searchPokemon() {
    this.errorMessage = null; // Reinicia el mensaje de error
    this.pokemonDetails = null; // Limpia los detalles del Pokémon

    if (this.searchTerm.trim() === '') {
      this.errorMessage = 'Por favor, introduce el nombre de un Pokémon.';
      return;
    }

    try {
      this.pokemonDetails = await this.pokemonService.getPokemon(this.searchTerm.toLowerCase());
    } catch (error) {
      this.errorMessage = 'No se pudo encontrar el Pokémon. Verifica el nombre e intenta nuevamente.';
    }
  }
}