const button = document.getElementById('myButton');

button.addEventListener('click', () => {
    console.log('Button click event executed'); // Log message to the console
});

const firstDiv= document.getElementById('firstDiv')
firstDiv.addEventListener('mouseover',()=>{
    console.log('Mouseover event on div executed')
})

const inputBox=document.getElementById('inputBox');
inputBox.addEventListener('input',()=>{
    console.log(inputBox.value);
})