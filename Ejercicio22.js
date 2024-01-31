const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const newFoodSchedule = [];

for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan) {
    newFoodSchedule.push(foodSchedule[i].name);
  } else {
    const uniqueFruit = fruits.find(
      (fruit) => !newFoodSchedule.includes(fruit)
    );
    if (uniqueFruit) {
      newFoodSchedule.push(uniqueFruit);
    }
  }
}

console.log(newFoodSchedule);
