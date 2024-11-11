// a.Define Callback Functions:

// Define a callback function named addNumbers that takes two numbers and returns their sum.
function addNumbers(a,b){
   return a+b;
}

// Define a callback function named multiplyNumbers that takes two numbers and returns their product.
function multiplyNumbers(a,b){
    return a*b;
}

// Define a callback function named subtractNumbers that takes two numbers and returns the result of subtracting the second number from the first.
function subtractNumbers(a,b){
    return b-a;
}

// Define a callback function named divideNumbers that takes two numbers and returns the result of dividing the first number by the second, ensuring to handle division by zero.
function divideNumbers(a,b){
    if (b==0){
        return "Division by zero is not allowed.";

    }
    else{
        return a/b
    }
}


// b.Define performArithmetic Function:
function performArithmetic(num1,num2,opration){
    return opration(num1,num2);
}


// c.Call performArithmetic with Callback Functions:

// Call performArithmetic with two numbers (e.g., 5 and 3) and the addNumbers callback function. Log the result to the console.
console.log(performArithmetic(5,3,addNumbers));



// Call performArithmetic with two numbers (e.g., 5 and 3) and the multiplyNumbers callback function. Log the result to the console.
console.log(performArithmetic(5,3,multiplyNumbers));

// Call performArithmetic with two numbers (e.g., 5 and 3) and the subtractNumbers callback function. Log the result to the console.
console.log(performArithmetic(5,3,subtractNumbers));

// Call performArithmetic with two numbers (e.g., 5 and 3) and the divideNumbers callback function. Log the result to the console.
console.log(performArithmetic(5,3,divideNumbers));