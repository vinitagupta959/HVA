// a.Define Callback Functions:        


// Define a callback function named doubleNumber that takes a number and returns its double.
function doubleNumber(num){
    return num*2;
    
}

// Define another callback function named squareNumber that takes a number and returns its square.
function squareNumber(num){
    return num*num;
}

// Define another callback function named incrementNumber that takes a number and returns the number incremented by one.
function incrementNumber(num){
    return num+1;
}

// b.Define performOperation Function:
function performOperation(num,operation){
    console.log(operation)
    return operation(num);

}

// c.Call performOperation with Callback Functions:


// Call performOperation with a number (e.g., 5) and the doubleNumber callback function, and log the result to the console.
console.log(performOperation(5,doubleNumber));

// Call performOperation with a number (e.g., 5) and the squareNumber callback function, and log the result to the console.
console.log(performOperation(5,squareNumber));

// Call performOperation with a number (e.g., 5) and the incrementNumber callback function, and log the result to the console.
console.log(performOperation(5,incrementNumber));