const maskify = (str) => {

if(str.length <=4){
  console.log(str, 'retorno');
  return str
}else{
  let saver =[];
  [...str.slice(0,-4)].forEach( i=> saver.push('#'))
  console.log(saver.join('')+ str.slice(-4),'concatenacion');
  return saver.join('')+ str.slice(-4)
}

};


maskify("4556364607935616"); // => "############5616"