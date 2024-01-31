const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 41, name: "El gato felix" },
];

const filteredToys = [];
for (let i = 0; i < toys.length; i++) {
  if (!toys[i].name.toLowerCase().includes("gato")) {
    filteredToys.push(toys[i]);
  }
}

console.log(filteredToys);
