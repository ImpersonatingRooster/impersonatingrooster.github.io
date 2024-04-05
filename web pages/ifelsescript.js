let dont = document.getElementById('dontClick');
let image = document.getElementById('clicky');
image.addEventListener("click", angry);

let clicked = 0
function angry(){
    if (clicked == 0){
        dont.innerHTML = "I'm warning you!";
        clicked++;
    }
    else if (clicked > 0 && clicked < 2){
        dont.innerHTML = "Last chance!";
        clicked++;
    }
    else {
        image.src = "../assets/angy.jpg"
        dont.innerHTML = "I warned you!"
    }
}