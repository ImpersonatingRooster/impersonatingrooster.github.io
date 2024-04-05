const title = document.getElementsByClassName("pagetitle")[0];
title.addEventListener("click", changeColor);
let count = 0;
function changeColor(event){
    
    if (title.style.color != "blue"){
    title.style.color = "blue";
    count+= 1;
    console.log(count);
    }
    
    else {
        title.style.color = "white";
    }
    
    if (count > 3){
        title.innerHTML = "Easter Egg!"
    }
}