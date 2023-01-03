// const isPalindrome = (str) => {
//   const realArray = str.split('')
//   const reverseArray = [...realArray].reverse()
//   let counter = 0
//   for(let i =0; i<realArray.length; i++){ realArray[i]=== reverseArray[i] ? counter++ : counter}
//   if(counter === reverseArray.length){
//     console.log('it is true');
//     return true
//   }else{
//     console.log('it is false');
//     return false
//   }
// };

// isPalindrome('ana')
// module.exports = isPalindrome;
///////////////////////////////////////////////////////////////
// const isPalindrome = (str) => {
//   let i=0
//   let j = str.length-1
//   let victorious = 0

//   for(i , j; i< str.length; i++, j-- ){
//     //console.log(str[i],'ace', str[j],'decr' );
// console.log([...str], 'OMG');
//     if(str[i]=== str[j]){ /// condicion clave 
//       victorious++
//     }
//   }
//   victorious == str.length ? console.log('true') :console.log('false')
// };

// isPalindrome('ana')
//////////////////////////////////////////////////////////////
// const isPalindrome = str => str === [...str].reverse().join('')

// isPalindrome('anaff')

//////////////////////////////////////////////////////////

// const isPalindrome = str =>{
//   const middle = Math.floor(str.length/2)
//   let counter =0
//   for(let i = 0; i<middle; i++ ){ 
//     if (str[i]!==str[str.length-1-i]){///// prueba que es diferente, condicion clave
//       console.log('no palindromo');
//       return false
//     }
//   }
//   console.log('palindromo');
//   return true
 
// }

// isPalindrome('stresseddesserts')

const isPalindrome = str =>{
if(str.length < 2){  //// caso base (mas peq)
  console.log(true);
  return true
}else{
  if(str[0]!== str[str.length-1]){//// condicion clave 
    console.log(false);
    return false
  }else{
    console.log('evalua mas peq');
    isPalindrome(str.slice(1,-1))
  }
}

}
isPalindrome('stresseddesserts')
