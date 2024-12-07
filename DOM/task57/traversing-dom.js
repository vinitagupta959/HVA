const fistlist=document.getElementById('list1');
let currentItem = firstlist.firstElementChild;
while (currentItem) {
    console.log(currentItem.textContent); // Log the content of each <li>
    currentItem = currentItem.nextElementSibling; // Move to the next <li>
}

let secondlist=document.getElementById('list2');
let currentItem1=secondlist.lastElementChild;
while(currentItem1){
  console.log(currentItem1.textContent)
  currentItem1=currentItem1.previousElementSibling;
}

let thirdlist=document.getElementById('list3');
let listItems = thirdList.children;
for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i].textContent); // Log the content of each <li>
}