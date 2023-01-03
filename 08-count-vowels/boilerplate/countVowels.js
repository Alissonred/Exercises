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

// countVowels('aaabrteenkkau')

////////////////////////////////////////////////////////////
//const validator =(obj, item)=>!obj[item]? obj[item]=1 : obj[item]=obj[item]+1
const countVowels = (str) => {
  //console.log([...str].reduce(validator(obj, item), { a: 0, e: 0, i: 0, o: 0, u: 0 }));
  let objInicial =  { a: 0, e: 0, i: 0, o: 0, u: 0 }
  let out = [...str].reduce( (counter, item)=> {
    console.log(counter, 'es counter ', item, 'es item', objInicial[item], 'es objInicial item');
    //console.log('el retorno es :');
    //console.log(item == obj[item]);
    //return !obj[item]? obj[item]=1 : obj[item]=obj[item]+1 }, objInicial);
    //return objInicial[item]== item ?  objInicial[item] = objInicial[item]+1: objInicial[item] = objInicial[item] , objInicial});
    
    objInicial[item]? objInicial[item] = objInicial[item]+1: '' , objInicial}); //// ARREGLAR, VER VIDEO PLATZI
  console.log(out);
return out

}

countVowels('aaabrteenkkau')
