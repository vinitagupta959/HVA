async function vini(){
try{
const response=await fetch(`https://the-trivia-api.com/v2/questions/?limit=50&difficulties=easy,medium,hard`)
console.log(response);
const data=await response.json();
console.log(data);

}
catch(error){
console.log("error",error)
}
}
vini()