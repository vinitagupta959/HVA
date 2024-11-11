// a.Define and Initialize the Array:
let numbers=[1,2,3,4,5];

// b.Iterate and Log Using forEach():
numbers.forEach(function (number){
  console.log(number);
});
numbers.forEach(function (number){
  console.log(number*2);
});

// c.Iterate and Create a New Modified Array Using map():
let squaredNumbers=numbers.map(function(number){
  return number*number;
});
console.log(squaredNumbers);

squaredNumbers=numbers.map(number=>{
  return number*number;
})
console.log(squaredNumbers);

// d.Iterate and Create a New Filtered Array Using filter():
let evenNumbers=numbers.filter(function(number){
  return number%2==0
 })
 console.log(evenNumbers);



evenNumbers=numbers.filter(numbers=>{
  return numbers%2==0;
});
 console.log(evenNumbers);





