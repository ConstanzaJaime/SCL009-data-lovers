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
    <img src="img/logo-header.png" class="img-header col- col-lg-4 " alt="Logo de la página">
    <!--DIV CONTENEDOR NAVBAR-->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!--NAVBAR MOSTRAR TODOS LOS POKEMON-->
        <li class="nav-item active">
          <a class="nav-link button" id="showAllPokemon" href="#"><strong>Ver todos los pokemon</strong><span
              class="sr-only">(current)</span></a>
        </li>
        <!--NAVBAR TIPO-->
        Seleccionar según: <br>
        <li class="nav-item dropdown" class="dropdown-menu">
          <select class="nav-link dropdown-toggle" href="#" id="type" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false" aria-labelledby="navbarDropdown">
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
            aria-haspopup="true" aria-expanded="false" aria-labelledby="navbarDropdown">
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
        <!--NAVBAR ORDENAR POR-->
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
      </ul>
    </div>
  </nav>

    
    <section class="cards-container" >

    <div id="myModal" class="row align-items-center"></div>

    <article id="showData" class="row" >
 
    </article>
    </section>
    `
//TARJETAS DE POKEMON.
  data.forEach(element => {
    document.getElementById("showData").innerHTML += //Imprime tarjetas de pokemon //115 pongo el numero del pokemon.
      `<a class="cards col-6 col-sm-4	col-md-3 col-lg-3	col-xl-2 btn btn-primary" data-toggle="modal" data-target="#modal${element.id}"> 
      <div class="each-card">
          <h5 class="card-title"><strong>${element.num}</strong></h5>
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title"><strong>${element.name}</strong></h5>
      </div>
      </a>`
  });

  // MODAL QUE MUESTRA LA INFORMACIÓN DE CADA POKEMON.
  function modal (pokeModal){
    pokeModal.forEach(element =>{
      document.getElementById("myModal").innerHTML +=    
      ` <!-- Modal -->
    <div id="modal${element.id}" class="modal col-4 offset-4">
        <!-- Contenido del modal -->
        <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
          <img src="${element.img}" class="card-img-top" alt="Imagen del pokemon">
          <div class="modal-body">
          <ul>
            <li>${element.num}</li>
            <li>${element.type}</li>
          </ul>
          </div> 
        </div> 
      </div>`
    });
    }
    
    modal(data);


  //REGRESA A LA PÁGINA PRINCIPAL DONDE SE MUESTRAN TODOS LOS POKEMON
  document.getElementById("showAllPokemon").addEventListener("click", () => {
    document.getElementById("weaknesses").value = ""; //Limpia select por debilidad
    document.getElementById("type").value = ""; //Limpia select por tipo
    document.getElementById("order").value= "";//Limpia orden por nombre o número
    document.getElementById("showData").innerHTML = ""; //Limpia tarjetas anteriores
    data.forEach(element => {
      document.getElementById("showData").innerHTML += //Imprime tarjetas de pokemon
        `<a class="cards col-6 col-sm-4	col-md-3 col-lg-3	col-xl-2 btn btn-primary" data-toggle="modal" data-target="#modal${element.id}"> 
      <div class="each-card" id="eachCard">
      <h5 class="card-title"><strong>${element.num}</strong></h5>
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title"><strong>${element.name}</strong></h5>
      </div>
      </a>`
    });
  });


  //MUESTRA LOS POKEMON SEGUN TIPO
  document.getElementById("type").addEventListener("change", () => {
    let selectValue = document.getElementById("type").value; //Retorna valor seleccionado por el usuario
    let type = window.filterPoke(data, selectValue, "type"); //Retorna objs de los pokemon del tipo seleccionado
    let typeCounter = window.counter(data, selectValue,"type") //Retorna el n° de pokemon por tipo
    document.getElementById("order").value="";//Limpia orden por nombre o número
    document.getElementById("weaknesses").value = ""; //Limpia select por debilidad
    document.getElementById("showData").innerHTML = ""; //Limpia tarjetas anteriores
    
    document.getElementById("showData").innerHTML = //Imprime n° de pokemon por tipo
      `<div class="counter-text col-12">Existen ${typeCounter} pokemon tipo ${selectValue}</div>`
    type.forEach(element => {
      document.getElementById("showData").innerHTML += //Imprime pokemon por tipo
        `<a class="cards col-6 col-sm-4	col-md-3 col-lg-3	col-xl-2 btn btn-primary" data-toggle="modal" data-target="#modal${element.id}"> 
      <div class="each-card" id="eachCard">
      <h5 class="card-title"><strong>${element.num}</strong></h5>
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title"><strong>${element.name}</strong></h5>
      </div>
      </a>`
    });
  });

  //MUESTRA LOS POKEMON SEGUN DEBILIDAD 
  document.getElementById("weaknesses").addEventListener("change", () => {
   
    
    let selectValue = document.getElementById("weaknesses").value; //Retorna valor seleccionado por el usuario
    let weak = window.filterPoke(data, selectValue,"weaknesses" ); //Retorna objs de los pokemon del tipo seleccionado
    let weakCounter = window.counter(data, selectValue,"weaknesses") //Retorna el n° de pokemon por debilidad
    document.getElementById("showData").innerHTML = ""; //Limpia tarjetas anteriores
    document.getElementById("order").value= ""; //Limpia orden por nombre o número
    document.getElementById("type").value = ""; //Limpia select por tipo
    document.getElementById("showData").innerHTML = //Imprime n° de pokemon por debilidad
      `<div class="counter-text col-12">Existen ${weakCounter} pokemon débiles al tipo ${selectValue}</div>`
    weak.forEach(element => {
      document.getElementById("showData").innerHTML += //Imprime pokemon por tipo
        `<a class="cards col-6 col-sm-4	col-md-3 col-lg-3	col-xl-2 btn btn-primary" data-toggle="modal" data-target="#modal${element.id}"> 
      <div class="each-card" id="eachCard">
      <h5 class="card-title"><strong>${element.num}</strong></h5>
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title"><strong>${element.name}</strong></h5>
      </div>
      </a>`
    });
  });

   //ORDENA LOS POKEMON SEGÚN SELECCIÓN
   document.getElementById("order").addEventListener("change", () => {
    let orderValue = document.getElementById("order").value; //Retorna valor seleccionado por el usuario
    document.getElementById("type").value = ""; //Limpia orden por nombre o número
    document.getElementById("weaknesses").value = ""; //Limpia select por debilidad
    document.getElementById("showData").innerHTML = ""; //Limpia tarjetas anteriores
    let orderSolution="";
    if(orderValue==="a-z"){
      orderSolution=window.orderData(data,"name","asc");
    }  if (orderValue==="z-a"){
      orderSolution=window.orderData(data,"name","des");
    } if (orderValue==="1-151"){
      orderSolution=window.orderData(data,"num","asc");
    } if (orderValue==="151-1"){
      orderSolution=window.orderData(data,"num","des");
    }
    orderSolution.forEach(element => {
      document.getElementById("showData").innerHTML += //Imprime pokemon por tipo
        `<a class="cards col-6 col-sm-4	col-md-3 col-lg-3	col-xl-2 btn btn-primary" data-toggle="modal" data-target="#modal${element.id}"> 
      <div class="each-card" id="eachCard">
      <h5 class="card-title"><strong>${element.num}</strong></h5>
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title"><strong>${element.name}</strong></h5>
      </div>
      </a>`
    });
  });
});


  // let ordered;
  // a.addEventListener('change', () => {
  //     document.getElementById('calculo-agregado').innerHTML = '';
  //     let option = a.value;
  //     if (option === 'AZ') {
  //         ordered = window.sortData(listaPokemones, 'name', 'asc');
  //     } else if (option === 'ZA') {
  //         ordered = window.sortData(listaPokemones, 'name', 'desc');
  //     } else if (option === 'NumUp') {
  //         ordered = window.sortData(listaPokemones, 'num', 'asc');
  //     } else if (option === 'NumDown') {
  //         ordered = window.sortData(listaPokemones, 'num', 'desc');
  //     }
  //     vaciar();
  //     imprimir(ordered);
  // }
  // 
//   // 81 - 96 select de orden.
//   // Evento para la función ordenar.
//   document.getElementById("order").addEventListener("change", () => {
//     //let orderBy = document.getElementById('nameOrNum').value;
//     let sortOrder = document.getElementById('order').value;
//     let dataOrder = window.orderPoke(data, sortBy, sortOrder);
//     document.getElementById("show-data").innerHTML = "";
//     dataOrder.forEach(element => {
//       document.getElementById("show-data").innerHTML +=
//         ` <div class="cards-container">
//               <div id="each-card" class="card col-sm-6 col-md-12" style="width: 18rem;">
//               <img src="${element.img}" class="card-img-top" alt="${element.name}">
//               <h5 class="card-title">${element.name}</h5>
//               </div> 
//           </div>`
//     });
//   });
// });

// DATAESCOGIDA.forEach(element => {
//   document.getElementById("show-data").innerHTML +=
//     ` <div class="cards-container" id="eachCard">
//           <div id="each-card" class="card col-sm-2 col-6" style="width: 18rem;">
//           <img src="${element.img}" class="card-img-top" alt="${element.name}">
//           <h5 class="card-title">${element.name}</h5>
//           </div> 
//       </div>`  

// //MODAL
// `<section>
// <!-- Modal -->
// <div id="myModal" class="modal">
//   <!-- Contenido del modal -->
//   <div class="modal-content">
//     <span id="close">&times;</span>
//     <img src="${(data[i].img)}" alt="Imagen del pokemon">
//     <h5></h5>
//     <p></p>
//   </div>
// </div>
// </section>`

// Para usar bootstrap tagName y atribute;


// tiposDePokemon15=["Grass","Poison","Fire","Flying","Water","Bug","Normal",
// "Electric","Ground","Fighting","Psychic","Rock","Ice","Ghost","Dragon"];
// debilidadDePokemon17= ["Grass","Poison","Fire","Flying","Water","Bug", //NORMAL
// "Electric","Ground","Fighting","Psychic","Rock","Ice","Ghost","Dragon",
// "Fairy","Dark","Steel"];
