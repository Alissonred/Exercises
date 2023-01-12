
// const chunk = (arr, size) => {
//   let out = []
//   if (arr.length <= size) { //// caso base
//     console.log(arr)
//     return arr
//   } else {/// caso iterativo
//     for (let i = 0; i < arr.length; i = i + size) {
//       console.log(i, 'es i');
//       console.log(arr.slice(i, size + i), 'es ret');
//       out.push(arr.slice(i, size + i))
//     }
//     console.log(out, 'es la salida');
//     return out
//   }

// };


const chunk = (arr, size) => {
  let out =[]
  if (arr.length <= size) { //// caso base
    console.log(arr)
    return arr
  } else {/// caso iterativo
 arr.reduce((acum,index)=>{
  out.push(arr.slice(acum, (index-1)+ size+ acum))  /// index -1 para arrancar desde 0
  return acum+size
 }, 0)
  }
}

chunk([1, 2, 3, 4], 3) // --> [[1, 2], [3, 4]]