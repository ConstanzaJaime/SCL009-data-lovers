/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*
const example = () => {
  return 'example';
};

window.example = example;
*/

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