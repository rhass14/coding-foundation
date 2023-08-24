//01) removeItem function (animals)

const animals = ["Dog", "Cat", "Lion"];
console.log(animals);

function removeItem(theArray, indexOfItemtoBeRemoved) {
  return theArray.toSpliced(indexOfItemtoBeRemoved, 1);
}
const arrayWithoutCat = removeItem(animals, 1);
console.log(animals === arrayWithoutCat);
console.log(arrayWithoutCat);

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(fruits);

function removeItem(theArray, indexOfItemtoBeRemoved) {
  return theArray.toSpliced(indexOfItemtoBeRemoved, 3);
}
const arrayWithoutCherry = removeItem(fruits, 4);

console.log(arrayWithoutCherry);

//03 sumOfCharacters function

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];

function sumOfCharacters(theArray) {
  let result = 0;

  for (let i = 0; i > theArray.length; i++) {
    const element = theArray[i]; // 3.
    if (typeof element === "string") {
      result = result + element.length;
    }
  }
  return result;
}

console.log(arr1);
