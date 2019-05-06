/* Manejo del DOM */
const data = Object.values(window.POKEMON.pokemon);

window.onload

//Primera pantalla (Home)
document.getElementById("root").innerHTML =
  `<div class="welcome-page col-">
  <div class="col-"><img src="img/PokemonGoLogo.png" class="big-logo col- col-sm-9 col-lg-6" alt="Logo Pokemon"></div><br><br><br>
  <button id="enterButton" class="button">Comenzar</button>
  </div>`;

//BOTON COMENZAR(ENTRA A LA PÁGINA PRINCIPAL Y MUESTRA POKEMON)
document.getElementById("enterButton").addEventListener("click", () => {
  document.getElementById("root").innerHTML =
    `<!--PANTALLA SECUNDARIA "CARTAS POKEMON"-->
  <div id="screen2">
    <!--NAVBAR INICIO-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <img src="img/logo-header.png" class="img-header col- col-lg-4 " alt="Logo de la página">
      <!--DIV CONTENEDOR NAVBAR-->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!--NAVBAR MOSTRAR TODOS LOS POKEMON-->
          <li class="nav-item active">
            <a class="nav-link button" id="showAllPokemon" href="#"><strong>Ver todos los pokemon</strong><span class="sr-only">(current)</span></a>
          </li>
          <!--NAVBAR TIPO-->
          Seleccionar según: <br>
          <li class="nav-item dropdown" class="dropdown-menu">
            <select class="nav-link dropdown-toggle" href="#" id="type" role="button" data-toggle="dropdown" 
            aria-haspopup="true" aria-expanded="false"  aria-labelledby="navbarDropdown">
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
              <option class="dropdown-item" value="Psychic" href="#">Psychic/Psiquíco</option>
              <option class="dropdown-item" value="Rock" href="#">Rock/Roca</option>
              <option class="dropdown-item" value="Ice" href="#">Ice/Hielo</option>
              <option class="dropdown-item" value="Ghost" href="#">Ghost/Fantasma</option>
              <option class="dropdown-item" value="Dragon" href="#">Dragon/Dragon</option>
            </select>
          </li>
          <!--NAVBAR DEBILIDAD-->
          <li class="nav-item dropdown" class="dropdown-menu">
          <select class="nav-link dropdown-toggle" href="#" id="weaknesses" role="button" data-toggle="dropdown" 
          aria-haspopup="true" aria-expanded="false" aria-labelledby="navbarDropdown" >
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

          <li class="nav-item dropdown">
          <select class="nav-link dropdown-toggle col" href="#" role="button" id="nameOrNum">
            <option value="" selected href="#">Ordena</option>
            <option value="name" href="#">Nombre</option>
            <option value="num" href="#">Número</option>
          </select>
        </li>

        <li>
        <select class="nav-link dropdown-toggle col" href="#" role="button" id="order">
          <option value="a-z"> A-Z </option>
          <option value="z-a"> Z-A </option>
          <option for="desc"> 1-151 </option>
          <option for="asc"> 151-1 </option>
         </select>
        </li>
        </ul>
      </div>
    </nav>
    
    <section class="cards-container" >
    <div id="showData" class="row" ></div>
    </section>
    `

  data.forEach(element => {
    document.getElementById("showData").innerHTML += //Imprime tarjetas de pokemon
      `<div class="cards col-6 col-sm-4	col-md-3 col-lg-3	col-xl-2"> 
      <div class="each-card" id="eachCard">
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title"><strong>${element.name}</strong></h5>
          <h5 class="card-title"><strong>${element.num}</strong></h5>
      </div>
      </div>`
  });

  //REGRESA A LA PÁGINA PRINCIPAL DONDE SE MUESTRAN TODOS LOS POKEMON
  document.getElementById("showAllPokemon").addEventListener("click", () => {
    document.getElementById("weaknesses").value = ""; //Limpia select por debilidad
    document.getElementById("type").value = ""; //Limpia select por tipo
    document.getElementById("showData").innerHTML = ""; //Limpia tarjetas anteriores
    data.forEach(element => {
      document.getElementById("showData").innerHTML += //Imprime tarjetas de pokemon
        `<div class="cards col-6 col-sm-4	col-md-3 col-lg-3	col-xl-2"> 
      <div class="each-card" id="eachCard">
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title"><strong>${element.name}</strong></h5>
          <h5 class="card-title"><strong>${element.num}</strong></h5>
      </div>
      </div>`
    });
  });

  //MUESTRA LOS POKEMON SEGUN TIPO
  document.getElementById("type").addEventListener("change", () => {
    let selectValue = document.getElementById("type").value; //Retorna valor seleccionado por el usuario
    let type = window.filterType(data, selectValue); //Retorna objs de los pokemon del tipo seleccionado
    let typeCounter = window.counterType(data, selectValue) //Retorna el n° de pokemon por tipo
    document.getElementById("weaknesses").value = ""; //Limpia select por debilidad
    document.getElementById("showData").innerHTML = ""; //Limpia tarjetas anteriores
    document.getElementById("showData").innerHTML = //Imprime n° de pokemon por tipo
      `<div class="counter-text col-12">Existen ${typeCounter} pokemon tipo ${selectValue}</div>`
    type.forEach(element => {
      document.getElementById("showData").innerHTML += //Imprime pokemon por tipo
        `<div class="cards col-6 col-sm-4	col-md-3 col-lg-3	col-xl-2"> 
      <div class="each-card" id="eachCard">
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title"><strong>${element.name}</strong></h5>
          <h5 class="card-title"><strong>${element.num}</strong></h5>
      </div>
      </div>`
    });
  });

  //MUESTRA LOS POKEMON SEGUN DEBILIDAD 
  document.getElementById("weaknesses").addEventListener("change", () => {
    let selectValue = document.getElementById("weaknesses").value; //Retorna valor seleccionado por el usuario
    let weak = window.filterWeak(data, selectValue); //Retorna objs de los pokemon del tipo seleccionado
    let weakCounter = window.counterWeak(data, selectValue) //Retorna el n° de pokemon por debilidad
    document.getElementById("type").value = ""; //Limpia select por tipo
    document.getElementById("showData").innerHTML = ""; //Limpia tarjetas anteriores
    document.getElementById("showData").innerHTML = //Imprime n° de pokemon por debilidad
      `<div class="counter-text col-12">Existen ${weakCounter} pokemon débiles al tipo ${selectValue}</div>`
    weak.forEach(element => {
      document.getElementById("showData").innerHTML += //Imprime pokemon por tipo
        `<div class="cards col-6 col-sm-4	col-md-3 col-lg-3	col-xl-2"> 
      <div class="each-card" id="eachCard">
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title"><strong>${element.name}</strong></h5>
          <h5 class="card-title"><strong>${element.num}</strong></h5>
      </div>
      </div>`
    });
  });

  // 
  //
  // Evento para la función ordenar.
  document.getElementById('order').addEventListener('change',() => {
    //let orderBy = document.getElementById('nameOrNum').value;
    let sortOrder = document.getElementById('order').value;
    let dataOrder = window.orderPoke(data,sortBy,sortOrder);
    document.getElementById("show-data").innerHTML = "";
    dataOrder.forEach(element => {
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

// tiposDePokemon15=["Grass","Poison","Fire","Flying","Water","Bug","Normal",
// "Electric","Ground","Fighting","Psychic","Rock","Ice","Ghost","Dragon"];
// debilidadDePokemon17= ["Grass","Poison","Fire","Flying","Water","Bug", //NORMAL
// "Electric","Ground","Fighting","Psychic","Rock","Ice","Ghost","Dragon",
// "Fairy","Dark","Steel"];
