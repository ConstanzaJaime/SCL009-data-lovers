/* Manejo del DOM */
window.onload

//  const data = Object.values(window.POKEMON.pokemon);

//Primera pantalla (Home)
document.getElementById("root").innerHTML =
  `<div class="welcome-page col-">
  <div class="col-"><img src="img/PokemonGoLogo.png" class="big-logo col-sm- col-lg-6" alt="Logo Pokemon"></div><br><br><br>
  <button id="enterButton" class="button">Comenzar</button>
  </div>`;

//BOTON COMENZAR(ENTRA A LA PÁGINA PRINCIPAL Y MUESTRA POKEMON)
document.getElementById("enterButton").addEventListener("click", () => {
  document.getElementById("root").innerHTML =
    `
<!--PANTALLA SECUNDARIA "CARTAS POKEMON"-->
<div id="screen2">
  <!--NAVBAR INICIO-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <img src="img/logo-header-01.png" class="img-header col- col-lg-4 " alt="Logo de la página">
    <!--DIV CONTENEDOR NAVBAR-->
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!--NAVBAR MOSTRAR TODOS LOS POKEMON-->
        <div class="box-navbar px-5">
        <li class="nav-item active">
          <a class="nav-link button" id="showAllPokemon" href="#"><strong>Ver todos los pokemon</strong><span
              class="sr-only">(current)</span></a>
        </li>
        </div>
        <!--NAVBAR TIPO-->
        <div class="box-navbar px-5">
        Seleccionar según: <br>
        <li class="nav-item dropdown" class="dropdown-menu">
          <select class="nav-link dropdown-toggle" href="#" id="type" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false" aria-labelledby="navbarDropdown" style="overflow-y: scroll;">
            <option class="dropdown-item" value="" selected href="#">TIPO</option>
            <option class="dropdown-item" value="Grass" href="#">Grass/Planta</option>
            <option class="dropdown-item" value="Poison" href="#">Poison/Veneno</option>
            <option class="dropdown-item" value="Fire" href="#">Fire/Fuego</option>
            <option class="dropdown-item" value="Flying" href="#">Flying/Volador</option>
            <option class="dropdown-item" value="Water" href="#">Water/Agua</option>
            <option class="dropdown-item" value="Bug" href="#">Bug/Insecto</option>
            <option class="dropdown-item" value="Normal" href="#">Normal/Normal</option>
            <option class="dropdown-item" value="Electric" href="#">Electric/Eléctrico</option>
            <option class="dropdown-item" value="Ground" href="#">Ground/Tierra</option>
            <option class="dropdown-item" value="Fighting" href="#">Fighting/Lucha</option>
            <option class="dropdown-item" value="Psychic" href="#">Psychic/Psíquico</option>
            <option class="dropdown-item" value="Rock" href="#">Rock/Roca</option>
            <option class="dropdown-item" value="Ice" href="#">Ice/Hielo</option>
            <option class="dropdown-item" value="Ghost" href="#">Ghost/Fantasma</option>
            <option class="dropdown-item" value="Dragon" href="#">Dragon/Dragon</option>
          </select>
        </li>
        <!--NAVBAR DEBILIDAD-->
        <li class="nav-item dropdown" class="dropdown-menu">
          <select class="nav-link dropdown-toggle" href="#" id="weaknesses" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false" aria-labelledby="navbarDropdown" style="overflow-y: scroll;">
            <option class="dropdown-item" value="" selected href="#">DEBILIDAD</option>
            <option class="dropdown-item" value="Grass" href="#">Grass/Planta</option>
            <option class="dropdown-item" value="Poison" href="#">Poison/Veneno</option>
            <option class="dropdown-item" value="Fire" href="#">Fire/Fuego</option>
            <option class="dropdown-item" value="Flying" href="#">Flying/Volador</option>
            <option class="dropdown-item" value="Water" href="#">Water/Agua</option>
            <option class="dropdown-item" value="Bug" href="#">Bug/Insecto</option>
            <option class="dropdown-item" value="Electric" href="#">Electric/Eléctrico</option>
            <option class="dropdown-item" value="Ground" href="#">Ground/Tierra</option>
            <option class="dropdown-item" value="Fighting" href="#">Fighting/Lucha</option>
            <option class="dropdown-item" value="Psychic" href="#">Psychic/Psiquíco</option>
            <option class="dropdown-item" value="Rock" href="#">Rock/Roca</option>
            <option class="dropdown-item" value="Ice" href="#">Ice/Hielo</option>
            <option class="dropdown-item" value="Ghost" href="#">Ghost/Fantasma</option>
            <option class="dropdown-item" value="Dragon" href="#">Dragon/Dragon</option>
            <option class="dropdown-item" value="Fairy" href="#">Fairy/Hada</option>
            <option class="dropdown-item" value="Dark" href="#">Dark/Siniestro</option>
            <option class="dropdown-item" value="Steel" href="#">Steel/Acero</option>
          </select>
        </li>
        </div>
        <!--NAVBAR ORDENAR POR-->
        <div class="box-navbar px-5">
        Ordenar por:
        <li class="nav-item dropdown" class="dropdown-menu">
          <select class="nav-link dropdown-toggle" href="#" id="order" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false" aria-labelledby="navbarDropdown">
            <option class="dropdown-item" value="" selected> ORDENAR DE:</option>
            <option class="dropdown-item" value="a-z"> A-Z </option>
            <option class="dropdown-item" value="z-a"> Z-A </option>
            <option class="dropdown-item" value="1-151"> 1-151 </option>
            <option class="dropdown-item" value="151-1"> 151-1 </option>
          </select>
        </li>
        </div>
      </ul>
    </div>
  </nav>

    
    <section class="cards-container" >

    <div id="myModal" class="row align-items-center"> 
    <!-- Aquí se imprime el modal --> 
    </div>

    <article id="showData" class="row" >
        <!-- Aquí se imprimen las cartas de cada pokemon -->
    </article>
    </section>
    `
  let printCards = function (el) {
    return el.forEach(element => {
      document.getElementById("showData").innerHTML += //Imprime pokemon por tipo
        `<a class="cards col-6 col-sm-4	col-md-3 col-lg-3	col-xl-2 btn btn-primary" data-toggle="modal" data-target="#modal${element.id}"> 
        <div class="each-card" id="eachCard">
        <h5 class="card-title"><strong>${element.num}</strong></h5>
            <img src="${element.img}" class="card-img-top" alt="${element.name}">
            <h5 class="card-title"><strong>${element.name}</strong></h5>
        </div>
        </a>`
      // MODAL QUE MUESTRA LA INFORMACIÓN DE CADA POKEMON.
      function modal(pokeModal) {
        pokeModal.forEach(element => {
          document.getElementById("myModal").innerHTML +=
            `<!-- Modal -->
            <div id="modal${element.id}" class="modal fade col-12 col-sm-8 col-md-6 col-lg-6 col-xl-6 align-self-center" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                  <img src="${element.img}" alt="Imagen del pokemon">
                    <h4 class="modal-title" id="exampleModalCenterTitle">${element.name}</h4>            
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div class="modal-body">
                    <dl>
                    <dt><strong>${element.num}</strong></dt>
                    <br>
                    <dt><strong>Tipo</strong></dt>
                      <dd>${element.type}</dd>
                      <dt><strong>Peso</strong></dt>
                      <dd>${element.weight}</dd>
                      <dt><strong>Estatura</strong></dt>
                      <dd>${element.height}</dd>
                      <dt><strong>Debilidades</strong></dt>
                      <dd>${element.weaknesses}</dd> 
                    </dl>
                  </div>
                </div>
              </div>
            </div>`
        });
      }

      modal(el);
    })
  };

  fetch('https://raw.githubusercontent.com/ConstanzaJaime/SCL009-data-lovers/master/src/data/pokemon/pokemon.json')
    .then(res => res.json())
    // .then(myJson => myJson.pokemon)
    .then(data => {
      data = data.pokemon;
      //TARJETAS DE POKEMON.
      printCards(data);

      //REGRESA A LA PÁGINA PRINCIPAL DONDE SE MUESTRAN TODOS LOS POKEMON
      document.getElementById("showAllPokemon").addEventListener("click", () => {
        document.getElementById("weaknesses").value = ""; //Limpia select por debilidad
        document.getElementById("type").value = ""; //Limpia select por tipo
        document.getElementById("order").value = ""; //Limpia orden por nombre o número
        document.getElementById("showData").innerHTML = ""; //Limpia tarjetas anteriores
        printCards(data);
      });


      //MUESTRA LOS POKEMON SEGUN TIPO
      document.getElementById("type").addEventListener("change", () => {
        let selectValue = document.getElementById("type").value; //Retorna valor seleccionado por el usuario
        let type = window.filterPoke(data, selectValue, "type"); //Retorna objs de los pokemon del tipo seleccionado
        let typeCounter = window.counter(data, selectValue, "type") //Retorna el n° de pokemon por tipo
        document.getElementById("order").value = ""; //Limpia orden por nombre o número
        document.getElementById("weaknesses").value = ""; //Limpia select por debilidad
        document.getElementById("showData").innerHTML = ""; //Limpia tarjetas anteriores
        document.getElementById("showData").innerHTML = //Imprime n° de pokemon por tipo
          `<div class="counter-text col-12">Existen ${typeCounter} pokemon tipo ${selectValue}</div>`


        //   <!--Div que contendrá el gráfico circular-->
        //  <div id="chart_div" type="text/javascript" class="chart col-12"></div>
        //        var Chart = require('chart.js');

        // <canvas id="myChart" width="400" height="400"></canvas>

        // var ctx = document.getElementById('myChart').getContext('2d');

        // var myChart = new Chart(ctx, {
        //     type: 'bar',
        //     data: {
        //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(255, 99, 132, 1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             yAxes: [{
        //                 ticks: {
        //                     beginAtZero: true
        //                 }
        //             }]
        //         }
        //     }
        // });
        printCards(type);
      });

      //MUESTRA LOS POKEMON SEGUN DEBILIDAD 
      document.getElementById("weaknesses").addEventListener("change", () => {
        let selectValue = document.getElementById("weaknesses").value; //Retorna valor seleccionado por el usuario
        let weak = window.filterPoke(data, selectValue, "weaknesses"); //Retorna objs de los pokemon del tipo seleccionado
        let weakCounter = window.counter(data, selectValue, "weaknesses") //Retorna el n° de pokemon por debilidad
        document.getElementById("showData").innerHTML = ""; //Limpia tarjetas anteriores
        document.getElementById("order").value = ""; //Limpia orden por nombre o número
        document.getElementById("type").value = ""; //Limpia select por tipo
        document.getElementById("showData").innerHTML = //Imprime n° de pokemon por debilidad
          `<div class="counter-text col-12">Existen ${weakCounter} pokemon débiles al tipo ${selectValue}</div>`
          printCards(weak);
      });

      //ORDENA LOS POKEMON SEGÚN SELECCIÓN
      document.getElementById("order").addEventListener("change", () => {
        let orderValue = document.getElementById("order").value; //Retorna valor seleccionado por el usuario
        document.getElementById("type").value = ""; //Limpia orden por nombre o número
        document.getElementById("weaknesses").value = ""; //Limpia select por debilidad
        document.getElementById("showData").innerHTML = ""; //Limpia tarjetas anteriores
        if (orderValue === "a-z") {
          window.orderData(data, "name", "asc");
        }
        if (orderValue === "z-a") {
          window.orderData(data, "name", "des");
        }
        if (orderValue === "1-151") {
          window.orderData(data, "num", "asc");
        }
        if (orderValue === "151-1") {
          window.orderData(data, "num", "des");
        }
        printCards(data);
      });
    })
});


// tiposDePokemon15=["Grass","Poison","Fire","Flying","Water","Bug","Normal",
// "Electric","Ground","Fighting","Psychic","Rock","Ice","Ghost","Dragon"];
// debilidadDePokemon17= ["Grass","Poison","Fire","Flying","Water","Bug", //NORMAL
// "Electric","Ground","Fighting","Psychic","Rock","Ice","Ghost","Dragon",
// "Fairy","Dark","Steel"];
