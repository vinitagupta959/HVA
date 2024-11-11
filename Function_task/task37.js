 //a. Define Higher Order Function
function higherOrderFunction(num, callback) {
    console.log(callback)// console isliye karwa rhe ki pta chale ki konsa function pass ho rha
    return callback(num); // Call the callback function with num
}

//b. Define Callback Function and Call Higher Order Function
function callbackFunction(num) {
    console.log("Callback Function:", num);  
}

// Call higherOrderFunction with 5 and callbackFunction
higherOrderFunction(5, callbackFunction);



// c.Call Higher Order Function with a Function Expression as Callback
console.log(higherOrderFunction(10, function(num) {
    console.log("Function Expression:", num);  
    
}));
// yaha output me undifined aa rha kyoki js me agr function kuch return na kar rha ho to undifined btata hai 


// d.Callback to Log Square of the Number:
higherOrderFunction(4,function(num){
    console.log(num*num);
    
})


// e.Callback to Log Sum of Two Numbers:
function newHigherOrderFunction(num1,num2,callback){
    callback(num1,num2)
   
}
newHigherOrderFunction(4,7, function(num1,num2){
    console.log(num1+num2)
})
