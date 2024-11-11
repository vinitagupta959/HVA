
// a.Define and Log the colors Array:
let colors=["red","green","blue"];
console.log(colors[0])

// b.Modify and Add color elements:
colors[1]="yellow";
console.log(colors[1]);

colors.push("white");
console.log(colors[colors.length-1])


// c.Iterate using Loops over the colors Array:
for(i=0;i<colors.length;i++){
  console.log(colors[i])
}
let j=0;
while (j<colors.length){
  console.log(colors[j]);
  j++;
}


for(let color of colors){
  console.log(color)
}


// d.Check Array Properties:
console.log(typeof colors);
console.log(colors.length);

// e.Array Methods:
colors.push("pink");
console.log(colors);

colors.pop();
console.log(colors)

let whiteindex=colors.indexOf("white");
console.log(whiteindex);

// f.Add and Iterate Over Properties:
colors.owner="vinita";
console.log(colors)


for (Property in colors){
  console.log(Property+":"+colors[Property]);
}

