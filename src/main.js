/* Manejo del DOM */
const data = POKEMON.pokemon;

window.onload


let home = document.getElementById("root").innerHTML =
  `
<button id="enter_page">Entrar</button>
`;
// Formato para las cartas que muestran todos los pokemon.
let pageShowData = document.getElementById("enter_page").addEventListener("click", () => {
    document.getElementById("root").innerHTML= 
   ` <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <a class="navbar-brand" href="#">Inicio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          TIPO
        </a>
        <div class="dropdown-menu" id="selectType" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" value="Grass" href="#">Grass</a>
          <a class="dropdown-item" value="Poison" href="#">Poison</a>
          <a class="dropdown-item" value="Fire" href="#">Fire</a>
          <a class="dropdown-item" value="Flying" href="#">Flying</a>
          <a class="dropdown-item" value="Water" href="#">Water</a>
          <a class="dropdown-item" value="Bug" href="#">Bug</a>
          <a class="dropdown-item" value="Normal" href="#">Normal</a>
          <a class="dropdown-item" value="Electric" href="#">Electric</a>
          <a class="dropdown-item" value="Ground" href="#">Ground</a>
          <a class="dropdown-item" value="Fighting" href="#">Fighting</a>
          <a class="dropdown-item" value="Psychic" href="#">Psychic</a>
          <a class="dropdown-item" value="Rock" href="#">Rock</a>
          <a class="dropdown-item" value="Ice" href="#">Ice</a>
          <a class="dropdown-item" value="Ghost" href="#">Ghost</a>
          <a class="dropdown-item" value="Dragon" href="#">Dragon</a>
        </div>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          DEBILIDAD
        </a>
        <div class="dropdown-menu" id="selectWeaknesses" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" value="Grass" href="#">Grass</a>
          <a class="dropdown-item" value="Poison" href="#">Poison</a>
          <a class="dropdown-item" value="Fire" href="#">Fire</a>
          <a class="dropdown-item" value="Flying" href="#">Flying</a>
          <a class="dropdown-item" value="Water" href="#">Water</a>
          <a class="dropdown-item" value="Bug" href="#">Bug</a>
          <a class="dropdown-item" value="Electric" href="#">Electric</a>
          <a class="dropdown-item" value="Ground" href="#">Ground</a>
          <a class="dropdown-item" value="Fighting" href="#">Fighting</a>
          <a class="dropdown-item" value="Psychic" href="#">Psychic</a>
          <a class="dropdown-item" value="Rock" href="#">Rock</a>
          <a class="dropdown-item" value="Ice" href="#">Ice</a>
          <a class="dropdown-item" value="Ghost" href="#">Ghost</a>
          <a class="dropdown-item" value="Dragon" href="#">Dragon</a>
          <a class="dropdown-item" value="Fairy" href="#">Fairy</a>
          <a class="dropdown-item" value="Dark" href="#">Dark</a>
          <a class="dropdown-item" value="Steel" href="#">Steel</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

`

  //TARJETAS CON INFORMACION DEL PERSONAJE
  for(let i = 0; i < data.length; i++) {
    document.getElementById("root").innerHTML +=
      `
        <div class="cards-container">
            <div id="each-card" class="card col-sm-2 col-6" style="width: 18rem;">
            <img src="${(data[i].img)}" class="card-img-top" alt="${(data[i].name)}">
            <h5 class="card-title">${(data[i].name)}</h5>
            </div>
        </div>`}

});

//MODAL
/*
`<section>
<!-- Modal -->
<div id="myModal" class="modal">
  <!-- Contenido del modal -->
  <div class="modal-content">
    <span id="close">&times;</span>
    <img src="${(data[i].img)}" alt="Imagen del pokemon">
    <h5></h5>
    <p></p>
  </div>
</div>
</section>`
 Eventos del modal
document.getElementById("each-card").addEventListener("click", () => {
    document.getElementById("myModal").style.display="block";
})

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("myModal").style.display = "none";
})
// cierra el modal al clickear fuera
document.getElementById("myModal").addEventListener("click", () => {
    document.getElementById("myModal").style.display = "none";
}); */


/*
tiposDePokemon15=["Grass","Poison","Fire","Flying","Water","Bug","Normal",
"Electric","Ground","Fighting","Psychic","Rock","Ice","Ghost","Dragon"]


debilidadDePokemon17= ["Grass","Poison","Fire","Flying","Water","Bug", //NORMAL
"Electric","Ground","Fighting","Psychic","Rock","Ice","Ghost","Dragon",
"Fairy","Dark","Steel"] 
*/