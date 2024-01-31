function findMax(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

const resultado = findMax(15, 7);
console.log(resultado);
