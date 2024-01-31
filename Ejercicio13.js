const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function finderName(names, letter) {
  const namesWithLetter = names.filter((name) =>
    name.toLowerCase().includes(letter.toLowerCase())
  );
  return namesWithLetter;
}

const result = finderName(nameFinder, "a");
console.log(result);
