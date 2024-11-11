// a.Define and Initialize the Array:
let temperatures=[-3,14,22,5,-10];

// b.Iterate and Log Using forEach():
temperatures.forEach(function (temperature){
  console.log(temperature);
});


temperatures.forEach(temperature=>{
  console.log(temperature);
});


temperatures.forEach(function(temperature){
   let fahrenheit = (temperature * 9/5) + 32;
   console.log(fahrenheit);
});

temperatures.forEach(temperature=>{
   let fahrenheit = (temperature * 9/5) + 32;
   console.log(fahrenheit);
});



// c.Iterate and Create a New Modified Array Using map():

let temperaturesInFahrenheit=temperatures.map(function(temperature){
   let fahrenheit = (temperature * 9/5) + 32;
   return fahrenheit;
});
console.log(temperaturesInFahrenheit);


 temperaturesInFahrenheit=temperatures.map(temperature=>{
   let fahrenheit = (temperature * 9/5) + 32;
   return fahrenheit;
});
console.log(temperaturesInFahrenheit);

// d.Iterate and Create a New Filtered Array Using filter():
let belowFreezing=temperatures.filter(function (temperature){
  return temperature<0;
})
console.log(belowFreezing);


 belowFreezing=temperatures.filter(temperature=>{
  return temperature<0;
})
console.log(belowFreezing);









