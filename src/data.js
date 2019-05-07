// data= POKEMON.pokemon
// condition= Seleción de usuario "Grass", "Poison",etc...
// filterBy= Criterio de filtro (debilidad o tipo)
// counterBy= Criterio de contador (debilidad o tipo)
// sortBy= Criterio de orden (nombre o número)
// sortOrder= Orden ascendente 1-151 ó a-z (usa sort normal) 
//               o descendente 151-1 ó z-a(usa sort con reverse)

//FILTRO DE POKEMON POR TIPO O DEBILIDAD
const filterPoke = (data, condition, filterBy) => {
  let result = data.filter(element => {
    return element[filterBy].includes(condition);
  })
  return result;
};
window.filterPoke = filterPoke;

//CONTADOR DE POKEMON POR TIPO O DEBILIDAD
const counter = (data, condition, counterBy) => {
  let result = data.reduce((contador, data) => {
    if (data[counterBy].includes(condition)) {
      return contador + 1;
    } else {
      return contador;
    }
  }, 0)
  return result
};
window.counter = counter;

//ORDENAR LA DATA
const orderData = (data, sortBy, sortOrder) => {
  const comparar = data.sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  })
  if (sortOrder === "asc") {
    return comparar;
  }
  if (sortOrder === "des") {
    return comparar.reverse();
  }
}
window.orderData = orderData;



// //FILTRO SEGUN TIPO DE POKEMON
// const filterType = (data, condition) => {
//   let result = data.filter(element => {
//     return element.type.includes(condition);
//   })
//   return result;
// };
// window.filterType = filterType;

// //FILTRO SEGÚN DEBILIDAD DE POKEMON
// const filterWeak = (data, condition) => {
//   let result = data.filter(element => {
//     return element.weaknesses.includes(condition);
//   })
//   return result;
// };
// window.filterWeak = filterWeak;

// //ORDENAR LA DATA
// const orderData = (data, sortBy, sortOrder) => {
//   const comparar = data.sort((a, b) => {
//     return a[sortBy].localeCompare(b[sortBy]);
//   })
//   if (sortOrder === "asc") {
//     return comparar;
//   }
//   if (sortOrder === "des") {
//     return comparar.reverse();
//   }
// }
// window.orderData = orderData;

// //CONTADOR DE POKEMON POR TIPO
// const counterType = (data, condition) => {
//   let result = data.reduce((contador, data)=>{
//     if (data.type.includes(condition)) {
//       return contador + 1;
//     } else {
//       return contador;
//     }
//   }, 0)
//   return result
// };
// window.counterType = counterType;

// //CONTADOR DE POKEMON POR DEBILIDAD
// const counterWeak = (data, condition) => {
//   let result = data.reduce((contador, data)=>{
//     if (data.weaknesses.includes(condition)) {
//       return contador + 1;
//     } else {
//       return contador;
//     }
//   }, 0)
//   return result
// };
// window.counterWeak = counterWeak;









// intentos de funcion para ordenar.

  // const orderPokeData = (data, sortOrder) => {
  //     if(sortOrder === 'a-z'){
  //     (a.name > b.name) ? 1 : 0;
  //   }
  //   else if (sortOrder === 'z-a'){
  //     (a.name < b.name) ? -1 : 0;
  //   })
  // }
  // window.orderPokeData = orderPokeData;

  // const orderPoke= (data, sortBy, sortOrder)=>{
  //   let result;
  //   if(sortOrder==="a-z"){
  //     data.sort((a,b)=>{
  //       return a[sortBy].localeCompare(b[sortBy]);
  //     })
  //   }
  //     if(sortOrder==="z-a"){
  //       data.sort((a,b)=>{
  //         return a[sortBy].localeCompare(b[sortBy]);
  //       })
      
  //   }
  //   return result
  // }
  // window.orderPoke = orderPoke;
