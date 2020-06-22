// select container class
const getContainer = document.querySelector(".container");
const text = document.getElementById("text")

// set the tottal time,
const totalTime = 7500; // in milliseconds
// set breath time
const breatheTime = (totalTime / 5) * 2 // 3 seconds 
// set hold time
const holdTime = totalTime / 5; // 1.5 seconds''

// define a function
function breatheAnimation() {
    // set a text initially
    text.innerHTML = "BreatheIn";

}