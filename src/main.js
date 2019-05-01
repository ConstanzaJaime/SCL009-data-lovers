/* Manejo del DOM */
const data= Object.values(window.POKEMON.pokemon);

window.onload

//Primera pantalla (Home)
let home = document.getElementById("root").innerHTML =
`
<img class="big-logo" src="img/PokemonGoLogo.png" alt="Logo Pokemon">
<button id="enter_page">Comenzar</button>
`;

//BOTON COMENZAR(ENTRA A LA PÁGINA PRINCIPAL Y MUESTRA POKEMON)
// const enterPage = 
document.getElementById("enter_page").addEventListener("click", () => {
  document.getElementById("root").innerHTML = 
  `
  <!--PANTALLA SECUNDARIA "CARTAS POKEMON"-->
  <div id="screen2">
    <!-- Header -->
    <header class="col-12">
    <img class="go-home" src="img/logo-pokemon.png" alt="Logo de la página"/>
    </header>

    <!--NAVBAR INICIO-->
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand go-home">Inicio</a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--DIV CONTENEDOR NAVBAR-->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!--NAVBAR MOSTRAR TODOS LOS POKEMON-->
          <li class="nav-item active">
            <a class="nav-link" id="showAllPokemon" href="#">Ver todos los pokemon<span
                class="sr-only">(current)</span></a>
          </li>
          <!--NAVBAR TIPO-->
          <li class="nav-item dropdown">
              Seleccionar según: <br>
            <select class="nav-link dropdown-toggle" href="#" role="button" id="type">
              <option value="" selected href="#">TIPO</option>
              <option value="Grass" href="#">Grass/Planta</option>
              <option value="Poison" href="#">Poison/Veneno</option>
              <option value="Fire" href="#">Fire/Fuego</option>
              <option value="Flying" href="#">Flying/Volador</option>
              <option value="Water" href="#">Water/Agua</option>
              <option value="Bug" href="#">Bug/Insecto</option>
              <option value="Normal" href="#">Normal/Normal</option>
              <option value="Electric" href="#">Electric/Eléctrico</option>
              <option value="Ground" href="#">Ground/Tierra</option>
              <option value="Fighting" href="#">Fighting/Lucha</option>
              <option value="Psychic" href="#">Psychic/Psiquíco</option>
              <option value="Rock" href="#">Rock/Roca</option>
              <option value="Ice" href="#">Ice/Hielo</option>
              <option value="Ghost" href="#">Ghost/Fantasma</option>
              <option value="Dragon" href="#">Dragon/Dragon</option>
            </select>
          </li>
          <!--NAVBAR DEBILIDAD-->
          <li class="nav-item dropdown">
              Seleccionar según: <br>
            <select class="nav-link dropdown-toggle" href="#" role="button" id="weaknesses">
              <option value="" selected href="#">DEBILIDAD</option>
              <option value="Grass" href="#">Grass/Planta</option>
              <option value="Poison" href="#">Poison/Veneno</option>
              <option value="Fire" href="#">Fire/Fuego</option>
              <option value="Flying" href="#">Flying/Volador</option>
              <option value="Water" href="#">Water/Agua</option>
              <option value="Bug" href="#">Bug/Insecto</option>
              <option value="Electric" href="#">Electric/Eléctrico</option>
              <option value="Ground" href="#">Ground/Tierra</option>
              <option value="Fighting" href="#">Fighting/Lucha</option>
              <option value="Psychic" href="#">Psychic/Psiquíco</option>
              <option value="Rock" href="#">Rock/Roca</option>
              <option value="Ice" href="#">Ice/Hielo</option>
              <option value="Ghost" href="#">Ghost/Fantasma</option>
              <option value="Dragon" href="#">Dragon/Dragon</option>
              <option value="Fairy" href="#">Fairy/Hada</option>
              <option value="Dark" href="#">Dark/Siniestro</option>
              <option value="Steel" href="#">Steel/Acero</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
    
    <section class="row" id="show-data">
    
    </section>
    `;

  data.forEach(element =>{
    document.getElementById("show-data").innerHTML +=
    ` 
    <div class="cards-container">
          <div id="each-card" class="card col-sm-6 col-md-12" style="width: 18rem;">
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title">${element.name}</h5>
          </div> 
      </div>
      `
  });
  
//REGRESA A LA PÁGINA PRINCIPAL DONDE SE MUESTRAN TODOS LOS POKEMON
document.getElementById("showAllPokemon").addEventListener("click", () => {
  document.getElementById("show-data").innerHTML = "";
  data.forEach(element =>{
    document.getElementById("show-data").innerHTML +=
    ` 
    <div class="cards-container">
          <div id="each-card" class="card col-sm-6 col-md-12" style="width: 18rem;">
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title">${element.name}</h5>
          </div> 
      </div>
      `
  });
})

//MUESTRA LOS POKEMON SEGUN TIPO
document.getElementById("type").addEventListener("change", () => {
  let selectValue = document.getElementById("type").value;
  let type = window.filterType(data, selectValue);     
  document.getElementById("show-data").innerHTML = "";
  type.forEach(element => {
    document.getElementById("show-data").innerHTML +=
      ` <div class="cards-container">
            <div id="each-card" class="card col-sm-6 col-md-12" style="width: 18rem;">
            <img src="${element.img}" class="card-img-top" alt="${element.name}">
            <h5 class="card-title">${element.name}</h5>
            </div> 
        </div>`  
  }); 
});

//MUESTRA LOS POKEMON SEGUN DEBILIDAD 
document.getElementById("weaknesses").addEventListener("change", () => {
  let selectValue = document.getElementById("weaknesses").value;
  let weak  = window.filterWeak(data, selectValue);     
  document.getElementById("show-data").innerHTML = "";
  weak.forEach(element => {
    document.getElementById("show-data").innerHTML +=
      ` <div class="cards-container">
            <div id="each-card" class="card col-sm-6 col-md-12" style="width: 18rem;">
            <img src="${element.img}" class="card-img-top" alt="${element.name}">
            <h5 class="card-title">${element.name}</h5>
            </div> 
        </div>`  
  }); 
});

});

document.getElementsByClassName("go-home").addEventListener("click", () => {
  document.getElementById("root").innerHTML+=`${home}`;
});

// EVENTOS DEL MODAL
// document.getElementById("each-card").addEventListener("click", () => {
//     document.getElementById("myModal").style.display="block";
// })

// document.getElementById("close").addEventListener("click", () => {
//     document.getElementById("myModal").style.display = "none";
// })
// // cierra el modal al clickear fuera
// document.getElementById("myModal").addEventListener("click", () => {
//     document.getElementById("myModal").style.display = "none";
// }); 


/*
tiposDePokemon15=["Grass","Poison","Fire","Flying","Water","Bug","Normal",
"Electric","Ground","Fighting","Psychic","Rock","Ice","Ghost","Dragon"]


debilidadDePokemon17= ["Grass","Poison","Fire","Flying","Water","Bug", //NORMAL
"Electric","Ground","Fighting","Psychic","Rock","Ice","Ghost","Dragon",
"Fairy","Dark","Steel"] 
*/

// Para usar bootstrap tagName y atribute;