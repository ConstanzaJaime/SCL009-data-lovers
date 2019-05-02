/* Manejo de data */

//FILTRO SEGUN TIPO DE POKEMON
const filterType = (data,condition) => { 
  let result = data.filter(element => { 
    return element.type.includes(condition);
})
return result;
};
window.filterType = filterType;

//FILTRO SEGÚN DEBILIDAD DE POKEMON
const filterWeak = (data,condition) => { 
  let result = data.filter(element => { 
    return element.weaknesses.includes(condition);
})
return result;
};
window.filterWeak = filterWeak;


// Para llamar en funciones window.data.NombreDelFiltro