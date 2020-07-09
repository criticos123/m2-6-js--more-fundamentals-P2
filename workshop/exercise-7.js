// Exercise 7
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

// createRecommendations function
const createRecommendations = (obj) => {
  const keyarr = Object.keys(obj);
  const newarr = keyarr.map((event) => {
    return "with " + event + " ,its best to have " + obj[event];
  });
  return newarr;
};
const printRecommendations = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
printRecommendations(createRecommendations(foodPairings));
