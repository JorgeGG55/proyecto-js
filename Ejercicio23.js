const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];

  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie);
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie);
  } else {
    largeMovies.push(movie);
  }
}

console.log("Películas pequeñas:");
console.log(smallMovies);

console.log("\nPelículas medianas:");
console.log(mediumMovies);

console.log("\nPelículas grandes:");
console.log(largeMovies);
