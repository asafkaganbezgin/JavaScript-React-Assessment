// ASSESSMENT:
// There is a text input in index.html which you will use
// Write a program such that:
// When we start typing inside the input,
// it will console.log the text only if we didn't type anything in the last 500ms
// You can find an example of the solution working in question3.gif
// Don't forget to add this file with script tag into index.html

// Hint: google 'debouncing'

// SOLUTION:

// Timer id is going to be used to clear the timer.
var timerId;
// Grasping the input field from the HTML.
var inputField = document.getElementById("a_text");

// Function to log the text written in the input field.
function logInputText() {
    console.log(inputField.value);
}

// Timer to be activated after typing in input field is stopped.
var debounceFunction = function (func, delay) {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
};

// Adding an event listener to input field and calling the timer function.
document.getElementById("a_text").addEventListener("input", function (e) {
    e.preventDefault();
    debounceFunction(logInputText, 500);
});
