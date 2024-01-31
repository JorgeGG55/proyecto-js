// 1.1
console.log("Bucle del 0 al 9:");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 1.2
console.log("Bucle del 0 al 9 con condición de resto igual a 0:");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 1.3
console.log("Bucle para contar ovejas:");
for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    console.log("Intentando dormir 🐑");
  } else {
    console.log("Dormido!");
  }
}
