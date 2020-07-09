// Exercise 2
// ----------

const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];

const printGuestOrder = (early, late) => {
  const list = early.concat(late);
  for (let i = 0; i < list.length; i++) {
    console.log(i + 1 + "." + list[i] + "\n");
  }
};
printGuestOrder(earlyBirds, lateComers);
