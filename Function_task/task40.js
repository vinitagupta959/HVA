 // a.Define Callback Functions for Area Calculations:

function areaOfRectangle(length,width){
    return length*width;
 }
 
 // Define a callback function named areaOfCircle that takes the radius of a circle and returns the area. Use the formula π * radius^2.
 
 function areaOfCircle(radius){
    return 3.14159 * radius*radius
 
 }
 
 
 // Define a callback function named areaOfTriangle that takes the base and height of a triangle and returns the area. Use the formula 0.5 * base * height.
 function areaOfTriangle(base,height){
     return 0.5 * base * height
 }
 
 
 // b.Define calculatePaintingCost Function:
 
 // Define a function named calculatePaintingCost that accepts three parameters: dimension1, dimension2, and calculateArea (a callback function that specifies the area calculation for a shape).
 function calculatePaintingCost(dimension1,dimension2,calculateArea){
     console.log(calculateArea);
     
     const costPerUnit=2;
     const area=calculateArea(dimension1,dimension2);
     console.log(area);
     
    totalCost=area*costPerUnit
     return totalCost
 }
  
 
 // c.Call calculatePaintingCost with Different Callback Functions:
 
 // Call calculatePaintingCost with dimensions for a rectangle (e.g., length = 5, width = 10) and the areaOfRectangle callback function. Log the result to the console.
 console.log(calculatePaintingCost(5,10,areaOfRectangle));
 
 // Call calculatePaintingCost with dimensions for a circle (e.g., radius = 3) and the areaOfCircle callback function. Note: Pass null for the second dimension as it's not needed. Log the result to the console.
 console.log(calculatePaintingCost(3,
 null,areaOfCircle));
 
 // Call calculatePaintingCost with dimensions for a triangle (e.g., base = 6, height = 8) and the areaOfTriangle callback function. Log the result to the console.
 console.log(calculatePaintingCost(6,8,areaOfTriangle));
 
 