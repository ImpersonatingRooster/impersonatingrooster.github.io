alert("Information is not being stored and is for assignment purposes only.");

const form = document.getElementById("inputs");
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const dobInput = document.getElementById("dob");
const petSelect = document.getElementById("pet");
const reasonTextarea = document.getElementById("reason");
const botcheckInput = document.getElementById("botcheck");
const errorBox = document.getElementById("errorBox");
const ph = document.getElementById("ph")

form.addEventListener("submit", validate);

function validate(event) {
    event.preventDefault();
    errorBox.innerHTML = "";
    console.log(petSelect.value);


    if (ph.value.trim() === "" || petSelect.value === "blank" || fnameInput.value.trim() === "" || lnameInput.value.trim() === "" || dobInput.value.trim() === "" || reasonTextarea.value.trim() === "" || botcheckInput.value.trim() === "") {
        errorBox.style.color = "red";
        errorBox.innerHTML = "Please fill in all fields.<br>";
    }
    else{
        errorBox.style.color = "green";
        errorBox.innerHTML = "Thank you for contacting me! I'll get back to you shortly"
        alert("Submitted succesfully")
    }    
}
