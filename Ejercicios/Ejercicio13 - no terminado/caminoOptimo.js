function caminoOptimo(ruta) {
  var actual = "";
  var ruta_array = ruta;
  var siguiente = "";
  for (let index = 0; index < 4; index + 1) {
    arrayDevuelto = [];
    actual = ruta[index];
    siguiente = ruta[index + 1];
    console.log(actual, siguiente);
    if (actual == siguiente) {
      arrayDevuelto.push(actual);
      arrayDevuelto.push(siguiente);
    }
    if (
      (actual == "ESTE" && siguiente == "OESTE") ||
      (siguiente == "ESTE" && actual == "OESTE")
    ) {
    } else if (
      (actual == "SUR" && siguiente == "NORTE") ||
      (siguiente == "NORTE" && actual == "SUR")
    ) {
    } else {
      arrayDevuelto.push(actual);
      arrayDevuelto.push(siguiente);
    }
  }
  console.log(arrayDevuelto);
}
// caminoOptimo(["NORTE", "OESTE", "SUR", "ESTE"]);
