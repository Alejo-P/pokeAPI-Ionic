<h1>pokeAPI-Ionic</h1>

<h2>Integrantes</h2>
<ol>
  <li>Daniel Cola</li>
  <li>Marcelo Pinzón</li>
  <li>Silvia Chaluisa</li>
</ol>

<ul>
  <li>
    <h2>Descripcion</h2>
      <p>La aplicación consiste en una lista de pokemones, donde 
      se puede ver la información de cada uno de ellos, como su
      nombre, habilidades. Además, se puede buscar un
      pokemon en específico por su nombre.</p>
  </li>
  <li>
    <h2>Proceso</h2>
    <p>Para la realización de la aplicación se utilizó el framework
    Ionic, el cual es un framework de código abierto que permite
    desarrollar aplicaciones móviles híbridas con tecnologías web
    como HTML, CSS y JavaScript. Además, se utilizó la pokeAPI
    que es una API que proporciona información de pokemones.</p>
    <h2>Comandos utilizados</h2>
    <p>Para la realización de la aplicación se utilizó los
    siguientes comandos:</p>
    <p>
      Se crea un proyecto de ionic con el nombre de
      <em> pokeapp </em>
      y se selecciona el tipo de proyecto como angular.
    </p>
    <pre><code>ionic start pokeapp blank --type=angular cd pokeapp</code></pre>
    <p>
      Se instala el módulo de angular common y http,
      necesario para el consumo de la pokeAPI.
    </p>
    <pre><code>npm install @angular/common @angular/http--force</code></pre>
    <p>
      Se genera un servicio con el que se consumirá la pokeAPI
      y una página para mostrar la lista de pokemones y la
      información detallada de un pokemon en específico.
    </p>
    <pre><code>ionic generate service services/pokemon
ionic generate page pages/pokemon-list
ionic generate page pokemon</code></pre>
  </li>
  <li>
    <h2>Capturas del funcionamiento</h2>
    <div align="center">
      <img src="screenshoots/Vista-lista.png" alt="Vista lista" width="300"/>
      <p>
        En esta pantalla se muestra una lista de pokemones,
        donde se puede ver el nombre de cada uno de ellos y
        al dar clic en uno de ellos se puede ver la información
        detallada del pokemon.
      </p>
    </div>
    <div align="center">
      <img src="screenshoots/Vista-detalle.png" alt="Vista detalle" width="300"/>
      <p>
        En esta pantalla se muestra la información detallada
        de un pokemon en específico, como su nombre, habilidades.
      </p>
      <br/>
    </div>
    <div align="center">
      <img src="screenshoots/Vista-busqueda.png" alt="Vista busqueda" width="300"/>
      <p>
        Se muestra la validacion y busqueda de un pokemon en
        específico por su nombre.
      </p>
      <img
        src="screenshoots/Vista-busqueda-2.png"
        alt="Vista busqueda 2"
        width= "300"
      />
      <p>
        Se muestra el campo con un valor ejemplo de la
        busqueda de un pokemon.
      </p>
    </div>
  </li>
</ul>
