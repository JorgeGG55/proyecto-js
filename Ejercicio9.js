const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(arr) {
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}

const resultado = sumAll(numbers);
console.log(resultado);
