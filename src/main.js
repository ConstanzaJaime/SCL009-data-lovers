/* Manejo del DOM */
const data = POKEMON.pokemon;

window.onload
//BLOQUEO DE SEGUNDA PÁGINA AL MOSTRAR LA PRIMERA
  document.getElementById("root").style.display= "none";

//BOTON COMENZAR(ENTRA A LA PÁGINA PRINCIPAL Y MUESTRA POKEMON)
  const enterPage =document.getElementById("enter_page").addEventListener("click", () => {
  document.getElementById("screen1").style.display= "none";
  document.getElementById("root").style.display= "block";
 
  //TODAS LAS TARJETAS CON IMAGEN Y NOMBRE DEL PERSONAJE
  for(let i = 0; i < data.length; i++) {
    document.getElementById("root").innerHTML +=
      `
        <div class="cards-container">
            <div id="each-card" class="card col-sm-2 col-6" style="width: 18rem;">
            <img src="${(data[i].img)}" class="card-img-top" alt="${(data[i].name)}">
            <h5 class="card-title">${(data[i].name)}</h5>
            </div> 
        </div>`
  } 
});
 //REGRESA A LA PÁGINA PRINCIPAL DONDE SE MUESTRAN TODOS LOS POKEMON
document.getElementById("showAllPokemon").addEventListener("click", () => {
      return enterPage;
});


//Formato para las cartas que muestran todos los pokemon.
//const selectType= document.getElementById("type");
  /*const selectType= document.getElementById("type");

  selectType.addEventListener("change", () => {//FUNCION BOTON SELECCIONAR TIPO

    let selectTypeValue = document.getElementById("type").value; //TOMAR SELECCION DE USUARIO
    const typeFilter = data.filter((element)=>{data[element].type.includes(selectTypeValue)}) //FILTRADO DE LO QUE SE VA A IMPRIMIR
    document.getElementById("root").innerHTML += `hola mundo ${typeFilter}` //UBICACION DE LO QUE SE VA A IMPRIMIR Y CONTENIDO DE LO QUE SE IMPRIME
  
  })*/
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