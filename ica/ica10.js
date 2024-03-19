const button1= document.querySelector(".button1");
button1.addEventListener ('click',runFunction);



const button2=document.getElementById("button2");
button2.addEventListener('click', changeText);

const heading=document.querySelector("h1")

function changeText(){
    heading.textContent = `hi`;
}



function runFunction(){
    const color = prompt ("what's your favorite color?");
    button.textContent = `favorite color: ${color}`;
}