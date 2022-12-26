const getPrintableNames = (arr) => {
  console.log(arr);

 const inic = arr.map(i=> i.split(' ')[0][0].toUpperCase())/// acceder 1er elem ->nombre->inicial-> Mayuscula 
 const inic4 = arr.map(i=> {
  let apellidoInic = i.split(' ')[1][0].toUpperCase()///inicial de apellido en mayuscula
  let apellidoFinal = i.split(' ')[1].toLowerCase().slice(1)///continuacion de apellido
  let nombreInic= i.split(' ')[0][0].toUpperCase()// inicial de nombre en mayusc
  console.log(`${nombreInic}. ${apellidoInic+apellidoFinal}`, 'lo que sale del map'  );
  return `${nombreInic}. ${apellidoInic+apellidoFinal}`   /// armazon
})/// acceder 1er elem ->nombre->inicial-> Mayuscula 
 

  console.log(inic4, 'es inic4');

};

nombres = ['marie curie', 'Mary Anning', 'ada lovelace', 'SALLY RIDE']
getPrintableNames(nombres)

module.exports = getPrintableNames;