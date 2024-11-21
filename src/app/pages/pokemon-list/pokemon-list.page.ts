import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';

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
  isLoading = false; // Indicador de carga

  constructor(
    private pokemonService: PokemonService, // Servicio de Pokémon
    private router: Router // Router para navegación
  ) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  public getPokemonList(): void {
    this.isLoading = true;
    this.pokemonService.getPokemonList(50).subscribe({
      next: (data) => {
        const promises = data.results.map((pokemon: any) => 
          this.getInfoPokemon(pokemon.url)
        );

        Promise.all(promises).then((pokemons) => {
          this.listPokemon = pokemons;
          this.isLoading = false;
        });
      },
      error: (err) => {
        console.error('Error al obtener la lista:', err);
        this.isLoading = false;
      },
    });
  }

  async getInfoPokemon(url: string): Promise<any> {
    try {
      return await this.pokemonService.getPokemonByUrl(url).toPromise();
    } catch (error) {
      console.error('Error al obtener los detalles:', error);
      return null;
    }
  }

  // Método para buscar un Pokémon por su nombre
  async searchPokemon() {
    this.errorMessage = null; // Reinicia el mensaje de error
    this.pokemonDetails = null; // Limpia los detalles del Pokémon

    if (this.searchTerm.trim() === '') {
      this.errorMessage = 'Por favor, introduce el nombre de un Pokémon.';
      return;
    }

    this.isLoading = true;
    try {
      const response = await this.pokemonService
        .getPokemon(this.searchTerm.toLowerCase())
        .toPromise();
      this.pokemonDetails = response;
      this.isLoading = false;

      // Navegar a la página de detalles del Pokémon
      this.router.navigate(['/pokemon', this.pokemonDetails.name]);
    } catch (error) {
      console.error('Error buscando un Pokémon:', error);
      this.errorMessage = 'No se pudo encontrar el Pokémon. Verifica el nombre e intenta nuevamente.';
      this.isLoading = false;
    }
  }
}
