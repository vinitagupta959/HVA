 const button=document.getElementById('chButton');

 button.addEventListener('click',()=>{
   const para=document.getElementById('para');
   para.innerText='Text has been changed!'

 });

const firstDiv=document.getElementById('firstDiv');

firstDiv.addEventListener('mouseover',()=>{
    firstDiv.style.backgroundColor = 'yellow';
    firstDiv.style.color = 'blue';
});

const insertButton=document.getElementById('inButton');

const htmlContentDiv=document.getElementById('htmlContent');
insertButton.addEventListener('click',()=>{
    htmlContentDiv.innerHTML=
    ` <h1>Welcome</h1>
     <p>this is para</p>`;

});

const togglePara=document.getElementById('togglePara');

const toggleButton=document.getElementById('toggleButton');
toggleButton.addEventListener('click',()=>{
    if(togglePara.style.display==='none'){
        togglePara.style.display=='block'
    }else{
        togglePara.style.display='none'
    }
});