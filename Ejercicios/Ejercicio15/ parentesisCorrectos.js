function parentesisCorrectos(string) {
  var ArrayCadenas = string.split("");
  var curved_r = 0;
  var curved_l = 0;

  for (let index = 0; index <= ArrayCadenas.length; index++) {
    if (ArrayCadenas[index] == ")") {
      curved_r = curved_r + 1;
    }
    if (ArrayCadenas[index] == "(") {
      curved_l = curved_l + 1;
    }
  }
  if (curved_r == curved_l) {
    return true;
  } else {
    return false;
  }
}

console.log(parentesisCorrectos(")(())))"));
