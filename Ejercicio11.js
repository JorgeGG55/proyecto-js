const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
      count++;
    } else if (typeof arr[i] === "string") {
      sum += arr[i].length;
      count++;
    }
  }

  const avg = sum / count;
  return avg;
}

const resultado = averageWord(mixedElements);
console.log(resultado);
