/* Manejo del DOM */
const data= Object.values(window.POKEMON.pokemon);

window.onload

//BLOQUEO DE SEGUNDA PÁGINA AL MOSTRAR LA PRIMERA
document.getElementById("screen2").style.display = "none";

//BOTON COMENZAR(ENTRA A LA PÁGINA PRINCIPAL Y MUESTRA POKEMON)
const enterPage = document.getElementById("enter_page").addEventListener("click", () => {
  document.getElementById("screen1").style.display = "none";
  document.getElementById("screen2").style.display = "block";
  data.forEach(element =>{
    document.getElementById("root").innerHTML +=
    ` <div class="cards-container">
          <div id="each-card" class="card col-sm-2 col-6" style="width: 18rem;">
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title">${element.name}</h5>
          </div> 
      </div>`
  });
});

//REGRESA A LA PÁGINA PRINCIPAL DONDE SE MUESTRAN TODOS LOS POKEMON
document.getElementById("showAllPokemon").addEventListener("click", () => {
  document.getElementById("root").innerHTML = "";
  //Muestra todas las tarjetas con imagen y nombre
  data.forEach(element =>{
    document.getElementById("root").innerHTML +=
    ` <div class="cards-container">
          <div id="each-card" class="card col-sm-2 col-6" style="width: 18rem;">
          <img src="${element.img}" class="card-img-top" alt="${element.name}">
          <h5 class="card-title">${element.name}</h5>
          </div> 
      </div>`
  });
});

//MUESTRA LOS POKEMON SEGUN TIPO
document.getElementById("type").addEventListener("change", () => {
  let selectValue = document.getElementById("type").value;
  let type = window.filterType(data, selectValue);     
  document.getElementById("root").innerHTML = "";
  type.forEach(element => {
    document.getElementById("root").innerHTML +=
      ` <div class="cards-container">
            <div id="each-card" class="card col-sm-2 col-6" style="width: 18rem;">
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
  document.getElementById("root").innerHTML = "";
  weak.forEach(element => {
    document.getElementById("root").innerHTML +=
      ` <div class="cards-container">
            <div id="each-card" class="card col-sm-2 col-6" style="width: 18rem;">
            <img src="${element.img}" class="card-img-top" alt="${element.name}">
            <h5 class="card-title">${element.name}</h5>
            </div> 
        </div>`  
  }); 
});

//})
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
