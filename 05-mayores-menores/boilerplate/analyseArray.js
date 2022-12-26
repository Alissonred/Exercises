// const analyseArray = (arr) => {
//   // ...
//   arr.sort((a,b)=> a<b ? -1 : 1 )
//   console.log(arr);
//   console.log([arr[arr.length-1], arr[0],arr[arr.length-2] ]);
//   return [arr[arr.length-1], arr[0],arr[arr.length-1] ]
// };
//module.exports = analyseArray;
//////////////////////////////////

const analyseArray = (arr) => {
  let max =0;
  let min =0;

  
  arr.forEach(element => {
    if(max < element){

      max= element
    }
    if(min > element){
      min = element
    }
    
  });
  console.log(max,'es max', min, 'es min', segmax,'es el 2do');
};

const ejemplo = [13,-1 ,8,7,10]
analyseArray(ejemplo)