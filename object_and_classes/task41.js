//  a.Define and Populate the student Object:
// const student = {}; 
// student.name = "vinita";
// student.email = "vinitagupta959@gmail.com";
// student.age = 21;
// console.log(student.name);

// b.Update the student Object:
// student.age = 10;
// console.log(student.age);

// c.Add Method and Nested Object to student:
// student.greet = function () {
//   console.log("hello" + " " + this.name);
// };
// student.greet();
 
// student.address = {
//   country: "india",
//   city: "raiput",
//   pin_code: 493661,
// };
 
// console.log(student.address.country);
 
// student.address.pin_code=492001;
// console.log(student.address.pin_code);


// d.Create and Populate the friend Object:
 
// const friend={
//     name:"friend's name",
//     email:"avni@gmail.com",
//     age:"friend's age",
//      address:{
//         country:"friend's country",
//         city:"frnds's city",
//         pin_code:"friend's pin code"
//     },
//     greet:function(){
//         console.log("Hello"+" "+this.name);
//     }
// }
// friend.greet();

// e.Create and Populate the topper Object:
 
// const topper={
//     name:"topper's name",
//     email:"topper's email",
//     age:"topper's age",
//     address:{
//         country:"topper's country",
//         city:"topper's city",
//         pin_code:"topper's pin_code"
//     },
//     greet:function(){
//         console.log("hello"+" "+this.name);
        
//     }
// } 
// topper.greet();






// f.Define and Use the Student Class:
class student{
constructor(name,email,age,country,city,pin_code){
    this.name=name;
    this.email=email;
    this.address={
        country:country,
        city:city,
        pin_code:pin_code
    };
}

greet(){
    console.log("hello"+" "+this.name);
    
}
getFullAddress(){
    console.log(this.address.country+","+this.address.city+"-"+this.address.pin_code);
    
}
}
 
// g.Create and Log Student Objects:
const forME=new student("vinita","VINI@gmail.com",21,"india","raiput",492001);
const forFrnd=new student("abc","Abc@gmail.com",22,"India","jaipur",456985);
const forAnother=new student("kabir","kabir@gmail.com",23,"USA","nusib",492008);

// h.Call the greet Method and getFullAddress Method on Student Objects:
forME.greet();
forME.getFullAddress();

forFrnd.greet();
forFrnd.getFullAddress();

forAnother.greet();
forAnother.getFullAddress();






