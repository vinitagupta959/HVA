const form=document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();  
    console.log('Form submitted!'); 
});

const divs=document.querySelectorAll('div');
divs.forEach((div)=>{
    div.addEventListener('click',()=>{
        if (div.style.backgroundColor === 'red') {
            div.style.backgroundColor = 'white';
        } else {
            div.style.backgroundColor = 'red';
        }
    });
});
 
const colorBox = document.getElementById('colorBox');
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const blueButton = document.getElementById('blue');
const greenButton = document.getElementById('green');

 
redButton.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'red';
    colorBox.textContent = 'Red!';
});

yellowButton.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'yellow';
    colorBox.textContent = 'Yellow!';
});

blueButton.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'blue';
    colorBox.textContent = 'Blue!';
});

greenButton.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'green';
    colorBox.textContent = 'Green!';
});
