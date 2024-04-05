const dark = document.getElementById("dark");
const reg = document.getElementById("default");
const light = document.getElementById("light");
const themeChange = document.getElementById("theme");

dark.addEventListener("click", godark);
reg.addEventListener("click", goreg);
light.addEventListener("click", golight);

function godark(event){
    themeChange.href = "./darkTheme.css";
}

function goreg(event){
    themeChange.href = "./defaultTheme.css";
}

function golight(event){
    themeChange.href = "./lightTheme.css"
}