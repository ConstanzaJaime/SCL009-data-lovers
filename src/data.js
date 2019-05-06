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


// 
// 
// INTENTOS DE FUNCIONES PARA EL ORDEN DE LA DATA

  // const orderPokeData = (data, sortOrder) => {
  //     if(sortOrder === 'a-z'){
  //     (a.name > b.name) ? 1 : 0;
  //   }
  //   else if (sortOrder === 'z-a'){
  //     (a.name < b.name) ? -1 : 0;
  //   })
  // }
  // window.orderPokeData = orderPokeData;

  const orderPoke= (data, sortBy, sortOrder)=>{
    let result;
    if(sortOrder==="a-z"){
      data.sort((a,b)=>{
        return a[sortBy].localeCompare(b[sortBy]);
      })
    }
      if(sortOrder==="z-a"){
        data.sort((a,b)=>{
          return a[sortBy].localeCompare(b[sortBy]);
        })
      
    };
    return result
  }
  window.orderPoke = orderPoke;