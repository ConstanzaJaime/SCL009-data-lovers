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

//CONTADOR DE POKEMON POR TIPO
const counterType= (data,condition) =>{
  let result= data.reduce(function(contador,data){
    if(data.type.includes(condition)){
      return contador+ 1;
    }else {
      return contador;
    }
   },0)
   return result
};
window.counterType = counterType;

//CONTADOR DE POKEMON POR DEBILIDAD
const counterWeak= (data,condition) =>{
  let result= data.reduce(function(contador,data){
    if(data.weaknesses.includes(condition)){
      return contador+ 1;
    }else {
      return contador;
    }
   },0)
   return result
};
window.counterWeak = counterWeak;


// 
// 
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