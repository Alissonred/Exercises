const lettersCounter = strClean => {// retorna histograma con cantidad para cada letra
 return strClean.reduce((acum, index) => {
    !acum[index] ? acum[index] = 1 : acum[index] = acum[index] + 1
    return acum
  }, {})
}

const cleaner = str => [...str.toUpperCase()].filter(i => i.charCodeAt() >= 65 && i.charCodeAt() <= 90)


// const sortString = (str1, str2) => {
//   let reducer
//   const str1Clean = [...str1.toUpperCase()].filter(i => i.charCodeAt() >= 65 && i.charCodeAt() <= 90)//si codigo está entre rango
//   const str2Clean = [...str2.toUpperCase()].filter(i => i.charCodeAt() >= 65 && i.charCodeAt() <= 90)
//   console.log(str1Clean,);
//   if (str1Clean.length == str2Clean.length) {
//     reducer = str1Clean.reduce((acum, index) => {
//       !acum[index] ? acum[index] = 1 : acum[index] = acum[index] + 1
//       console.log(acum, 'es acum');
//       return acum
//     }, {})
//   } else {
//     console.log('no tienen la misma longitud');
//   }
//   console.log(reducer, 'es reducer');
//   console.log(str1Clean.length, str2Clean.length);

//   //// que la long sea igual
//   //que la cantidad de cada letra sea igual

// };

const sortString = (str1, str2) => {
  const str1Estable = lettersCounter(cleaner(str1)) // se guardan en variables para poderlos comparar
  const str2Estable =lettersCounter(cleaner(str2))
  console.log(lettersCounter(cleaner(str1)), lettersCounter(cleaner(str2)), 'es la ejec');
  Object.keys(str1Estable).forEach(i=>{
    if(str1Estable[i]!== str2Estable[i]){// si una no cumple 
      console.log('hay una falsa');
      return false
    }else{
      console.log('todas cumplen');
      return true
    }  
  })

}

sortString('rail safeoty', 'fairy tales')
