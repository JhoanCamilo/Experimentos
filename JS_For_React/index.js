let contenedor = document.getElementById("cards"); 
let botones = document.getElementById("botones");

function updatePokemons(url) {
    if (url) {
  
      //Reiniciamos pokemones actuales
      contenedor.innerHTML = "";
      // Llamamos a la API de pokemon con Fetch
      fetch(url)
        .then(res => res.json())
        .then(res => {
          // Obtenemos y recorremos a los primeros 20 pokemones obtenidos
          for (let i of res.results) {
  
            // Realizamos otra solicitud Fetch con la URL especifica del pokemon actual recorrido, para obtener datos mas especficos como la imagen
            fetch(i.url)
              .then(x => x.json())
              .then(x => {
                // Vamos pintando o ingresando la imagen y nombre del pokemon actual que se esta evaluando 
                contenedor.innerHTML += `<div class="card" style="width: 18rem;">
                                            <img src="${x.sprites.front_default}" class="card-img-top">
                                            <div class="card-body">
                                                <h3>${x.name}</h3>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>`;
              });
          };
          // Pintamos los enlaces de siguiente o anterior de la paginacion de los pokemones 
          //Boton hacia atrás
          botones.innerHTML = (res.previous) ? `<button id="Previo" onclick="updatePokemons('${res.previous}')">Atrás</button>` : "";
          //Botón hacia adelante
          botones.innerHTML += (res.next) ? `<button id="Sgt" onclick="updatePokemons('${res.next}')">Siguiente</button>` : "";
  
        });
    }
  
  }
  
  updatePokemons("https://pokeapi.co/api/v2/pokemon");