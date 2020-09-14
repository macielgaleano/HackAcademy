function caminoOptimo(ruta) {
  for (let index = 0; index < ruta.length; index + 2) {
    var indexValue = index;
    var arrayDevuelto = [];
    var actual = ruta[indexValue];
    var siguiente = ruta[indexValue + 1];
    console.log(indexValue, actual, siguiente);
    if (actual == siguiente) {
      arrayDevuelto.push(actual);
      arrayDevuelto.push(siguiente);
    } else if (
      (actual == "ESTE" && siguiente == "OESTE") ||
      (siguiente == "ESTE" && actual == "OESTE")
    ) {
      break;
    } else if (
      (actual == "SUR" && siguiente == "NORTE") ||
      (siguiente == "NORTE" && actual == "SUR")
    ) {
      break;
    } else {
      arrayDevuelto.push(actual);
      arrayDevuelto.push(siguiente);
      console.log(arrayDevuelto);
      break;
    }
  }
  return arrayDevuelto;
}
// caminoOptimo(["NORTE", "OESTE", "SUR", "ESTE"]);
