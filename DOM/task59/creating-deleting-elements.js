function addListItem(){
    const list=document.getElementById('list');
    const newItem=document.createElement('li')
    newItem.textContent=`New Item ${list.children.length + 1}`
    list.appendChild(newItem);
}
document.getElementById('addButton').addEventListener('click', addListItem);


function removeLastListItem() {
    const list = document.getElementById('list'); // Get the <ul> element
    const lastItem = list.lastElementChild; // Get the last <li> element
    if (lastItem) {
        list.removeChild(lastItem); // Remove the last <li> element
    }
}
document.getElementById('removeButton').addEventListener('click', removeLastListItem);