// a.Calculate Area Function:

function calculateArea(width,height){
    return width * height;
}
console.log(calculateArea(5,10)); // 50

// b.Modify Calculate Area Function with Default Values:
function calculateAreaWithDefaults(width=1,height=1){
    return width*height
}
console.log(calculateAreaWithDefaults(5,10));

// c.Rewrite Calculate Area as a Function Expression:
calculateAreaFunction=function(width,height){
    return width*height;

}
console.log(calculateAreaFunction(5,10)); // 50

// d.Rewrite Calculate Area as an Arrow Function:
let calculateAreaArrow=(width,height)=>{
    return width*height;
}
console.log(calculateAreaArrow(5,10)); // 50