// Lesson 4
// Assignment 1: 99 Bottles of Coke

let lessBottle = -1;
for (var i = 99; i >= 0; i--) {
  if (i === 0) {
    console.log(
      "No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, 99 bottles of coke on the wall."
    );
  } else if (i === 1) {
    console.log(
      i,
      "bottle of coke on the wall,",
      +i,
      "bottle of coke. Take one down and pass it around, no more bottles of coke on the wall."
    );
  } else if (i <= 99 && i >= 2) {
    console.log(
      i,
      "bottles of coke on the wall",
      i,
      "bottles of coke. Take one down and pass it around,",
      i + lessBottle,
      " bottles of coke on the wall."
    );
  }
}
