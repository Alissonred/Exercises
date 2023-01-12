// const validateVowels=(letter, ref, counter)=> letter===ref? counter[ref] = counter[ref]+  1 : counter[ref]= counter[ref]

// const countVowels = (str) => {
//   let counter={
//     a : 0,
//     e : 0,
//     i : 0,
//     o : 0,
//     u : 0
//   }
//   for(let i=0; i<str.length; i++){
//     validateVowels(str[i],'a',counter)
//     validateVowels(str[i],'e', counter)
//     validateVowels(str[i],'i',counter)
//     validateVowels(str[i],'o',counter)
//     validateVowels(str[i],'u',counter)
//   }
//   console.log(counter);
//   return counter
// };

// // countVowels('aaabrteenkkau')


////////////////////////////////////////////////////////
const countVowels = (str) => {
  let objInicial = { a: 0, e: 0, i: 0, o: 0, u: 0 }
  return [...str].reduce((acum, index) => {
    if (Object.keys(objInicial).includes(index) == false) {/// evaluar si está incluido en el grupo de vocales
      console.log('no lo incluye');
    } else {
      acum[index] = acum[index] + 1
      console.log(index, 'index si existe');
    }

    console.log(acum, 'es acum');

    return acum
  }, objInicial)
}
countVowels('aaabrteenkkau')


////////////////////////////////////////
///DE PRUEBA TÉCNICA
////////////////////////////////////////
//console.log( true == 1);
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// a = a.concat(b)
// console.log(a,'es a');

// const sheeps = [{name: 'Noah', color: 'blue'},{name: 'Euge', color:'red'}, {name: 'Ki Na Ma',color:'red'}]
// const filteredSheeps =[...sheeps].filter(sheep=> sheep.color== 'red' && sheep.name.toLowerCase().includes('n') &&  sheep.name.toLowerCase().includes('a'))
// console.log(filteredSheeps[0].name);
/* sheeps.forEach(sheep=>{
if(sheep[color]== 'red' && sheep[name].includes('n') &&  sheep[name].includes('n')){
console.log('ingresa')
}
}) */

///////////////////////////////////////////////////////////////////////////////
// const numbers = "1,2,3/3,2,1"

// const list = (stringList) => {
//   let addResults = []
//   let process = [...stringList.split('/')].map(element => element.split(','))
//   let process2 = process.map(i => i.map(j => Number(j)))
//   for (let index = 0; index <= process2.length; index++) {
//     addResults.push(process2[0][index] + process2[1][index])
//   }
//   console.log(addResults);
//   return addResults
// }

// list(numbers)

