// a.Define and Initialize the Array:

let fruits=["apple","banana","cherry","date"];

// b. Iterate and Log Using forEach():
fruits.forEach(function(fruit){
  console.log(fruit.toUpperCase());
});

fruits.forEach(fruit=>{
  console.log(fruit.toUpperCase());
});

// c.Calculate Total Characters Using forEach():
let totalCharacters=0;
fruits.forEach(function(fruit){
  totalCharacters+=fruit.length;
})
console.log(totalCharacters);

// d.Iterate and Create a New Modified Array Using map():

let reversedFruits=fruits.map(function(fruit){
  return fruit.split('').reverse().join('');
});
console.log(reversedFruits);



reversedFruits=fruits.map(fruit=>{
  return fruit.split('').reverse().join('');
});
console.log(reversedFruits);

// e.Iterate and Create a New Filtered Array Using filter():
let longFruits=fruits.filter(function(fruit){
  return fruit.length>5;
});
console.log(longFruits);



longFruits=fruits.filter(fruit=>{
  return fruit.length>5;
});
console.log(longFruits);

// f.Create a New Filtered and Modified Array using filter() and map():
let aFruit=fruits.filter(fruit=>{
  return fruit.includes("a");
})
let aFruitsUpper=aFruit.map(function(fruit){
  return fruit.toUpperCase();
})
console.log(aFruitsUpper)

