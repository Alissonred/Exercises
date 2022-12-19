const hasText = (a, b) => {

let count =0 
  for(let i=0; i < a.length; i++){
    for(let j=0; j < b.length; j++){
      if(a[i]===b[j] && a[i+1]===b[j+1] && a[i+2]===b[j+2]){ /// mejorar la lógica ahí
      count++
      console.log(a[i], b[j], ' entra a la condicion', count, 'es count');
      }
    }
  }
  if(count === b.length){ /// excelente
    console.log('el retorno es: true, count', count);
    return true
  }
  else{
    console.log('el retorno es: false')
    return false
  }

};

// hasText('omg', 'm')/// con o, m solos no funciona, pte mayusc

// module.exports = hasText;

const subsstringincludes = (a, b )=>{
if(a.includes(b)){
  console.log('true es el retorno');
return true
}
console.log('false es el retorno');
return false
}

//subsstringincludes('foo', '')

/// slice, substr

const conSlice= (a, b)=>{
  /// obtener long b
  ///recortar un pedazo con esa long
  /// ir recorriedo en un ciclo hasta que haga match
  let val = false
  //console.log(a,'es a', b, 'es b');
  //pte el caso en el que  son a y b vacias
  for(let i=0; i< a.length; i++){
   let seccion= a.slice(i, b.length+i)
   //console.log(seccion, 'es seccion');
   if (b=== seccion) {
    
    val = true
    console.log('val es ', val);
    return true
   }
  }
  console.log('es el retorno: ', val);
}
conSlice('OMG', 'O')