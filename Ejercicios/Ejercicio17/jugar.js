function jugar(option) {
  var optionMachine = ["Tijera", "Papel", "Piedra"];
  var optionSelectedByMachine =
    optionMachine[Math.floor(Math.random() * (3 - 1 + 1) + 1)];
  if (option == optionSelectedByMachine && option == "Tijera") {
    console.log("La computadora eligio papel, empataron");
  }
  if (option == optionSelectedByMachine && option == "Papel") {
    console.log("La computadora eligio papel, empataron");
  }
  if (option == optionSelectedByMachine && option == "Piedra") {
    console.log("La computadora eligio papel, empataron");
  }
  if (option == "Tijera" && optionSelectedByMachine == "Piedra") {
    console.log("La computadora eligio piedra, perdiste");
  }
  if (option == "Piedra" && optionSelectedByMachine == "Tijera") {
    console.log("La computadora eligio tijera, ganaste");
  }
  if (option == "Piedra" && optionSelectedByMachine == "Papel") {
    console.log("La computadora eligio papel, perdiste");
  }
  if (option == "Papel" && optionSelectedByMachine == "Piedra") {
    console.log("La computadora eligio piedra, ganaste");
  }
  if (option == "Tijera" && optionSelectedByMachine == "Papel") {
    console.log("La computadora eligio piedra, perdiste");
  }
  if (option == "Papel" && optionSelectedByMachine == "tijera") {
    console.log("La computadora eligio tijera, ganaste");
  }
}

jugar("Papel");
