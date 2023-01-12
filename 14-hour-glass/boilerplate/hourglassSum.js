const hourglassSum = (arrIn) => {
const arr = [...arrIn]
let arrSuma = []
let max = 0

for(let i =0; i<=arr.length-3 ;i++){
  for(let j = 0; j<=arr.length-3; j++){

    arrSuma.push(arr[i][0+j]+ arr[i][1+j]+ arr[i][2+j]+
    arr[i+1][1+j]+
    arr[i+2][0+j]+ arr[i+2][1+j] +arr[i+2][2+j])
    
  }
}

console.log(arrSuma, ' es arrSuma');
arrSuma.forEach(i=> i>max? max=i: max )
  console.log(max, 'es max');
  return max
};

pru = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]
hourglassSum(pru)