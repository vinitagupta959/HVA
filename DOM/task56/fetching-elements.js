const myDiv = document.getElementById('myDiv');
console.log(myDiv.textContent);
const elementsByClass = document.getElementsByClassName('myClass');
for (let i = 0; i < elementsByClass.length; i++) {
    console.log(elementsByClass[i].textContent);
}

const elementsByTagName = document.getElementsByTagName('p');
 for (let i = 0; i < elementsByTagName.length; i++) {
    console.log(elementsByTagName[i].textContent);
}
 
 
const firstSpan = document.querySelector('.highlight');
console.log(firstSpan.textContent);

const allSpans = document.querySelectorAll('.highlight'); // Fetch all elements
for (let i = 0; i < allSpans.length; i++) {
    console.log(allSpans[i].textContent); // Log each element's content
}

