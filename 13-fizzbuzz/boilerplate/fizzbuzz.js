fizzBuzz= (n) => {
for(i=1;i<=n;i++){

if(i%3 == 0 || i%5 == 0){
  
  if(i%3 == 0 && i%5 == 0){
    console.log(i, 'fizzBuzz')
  }else{
    if(i%3 == 0){
      console.log(i, 'fizz')}
    if(i%5 == 0){
      console.log(i, 'buzz')}
  }

}else{
  console.log(i, 'es i');
}
}

};

fizzBuzz(15);
// -> 1
// -> 2
// -> fizz
// -> 4
// -> buzz