import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  name: string = '';
  pokemonDetails: any = null; // Para almacenar los detalles del Pokémon
  isLoading = true; // indicador de carga
  errorMessage: string | null = null; // Para manejar mensajes de error

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    // Suscribirse a los parámetros de la ruta para obtener el 'name'
    this.route.params.subscribe(params => {
      this.name = params['name'] || 'No name provided';
    });

    this.getPokemon();
  }

  public getPokemon() {
    this.isLoading = true;
    this.pokemonService.getPokemon(this.name)
      .subscribe({
        next: (data) => {
          this.pokemonDetails = data;
        },
        error: (err) => {
          console.error('Error fetching Pokémon:', err);
          this.errorMessage = 'No se pudo encontrar el Pokémon. Verifica el nombre e intenta nuevamente.';
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }
}
