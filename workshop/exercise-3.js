// Exercise 3
// ----------

let mostPopularFood = [
  "bean burritos",
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  "buffalo-flavored cauliflower",
];

const fixList = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const sorted = arr.sort();
    console.log(sorted[i]);
  }
};

fixList(mostPopularFood);
