/* Manejo del DOM */
const data = POKEMON.pokemon;

window.onload


let home = document.getElementById("root").innerHTML = 
`
<button id="enter_page">Entrar</button>
`;
// Formato para las cartas que muestran todos los pokemon.
let pageShowData = document.getElementById("enter_page").addEventListener("click", () => {
     
    for(let i = 0; i < data.length; i++){
        document.getElementById("root").innerHTML +=
        `
        <div class="cards-container row">
            <div id="each-card" class="card col-sm-6 col-2" style="width: 18rem;">
            <img src="${(data[i].img)}" class="card-img-top" alt="${(data[i].name)}">
            <h5 class="card-title">${(data[i].name)}</h5>
            </div>
        </div>`
    }  