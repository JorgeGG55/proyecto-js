// 1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

// 1.2
const avengersModified = ["IRONMAN", ...avengers.slice(1)];
console.log(avengersModified);

// 1.3
console.log(avengers.length);

// 1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

// 1.5
const rickAndMortyCharactersModified = rickAndMortyCharacters.slice(0, -1);
console.log(
  rickAndMortyCharactersModified[0],
  rickAndMortyCharactersModified[rickAndMortyCharactersModified.length - 1]
);

// 1.6
const rickAndMortyCharactersRemoved = [
  ...rickAndMortyCharacters.slice(0, 1),
  ...rickAndMortyCharacters.slice(2),
];
console.log(rickAndMortyCharactersRemoved);
