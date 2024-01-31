const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(arr) {
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const avg = sum / arr.length;
  return avg;
}

const resultado = average(numbers);
console.log(resultado);
