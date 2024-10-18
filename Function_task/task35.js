
// a Greet function
function greet(name){
    return "Hello"+","+ name;
}
let person="vinita";
console.log(greet(person)); // Hello, vinita


// b. Greet function with default parameter
function greetDefault(name="Guest"){
    return "Hello"+","+ name;
}  
console.log(greetDefault()); // Hello, Guest


// c.Rwrite Greet as a Fnction Expression
let greetFunction=function(name){
    return "Hello"+","+ name;
}
let name="vishu";
console.log(greetFunction(name)); // Hello, vinita

// d.Rewrite Greet as a Arrow Function:
let greetArrow=(name)=>{
    return "Hello"+","+ name;
}
 console.log(greetArrow("vinay")); // Hello, vinay
 




 
