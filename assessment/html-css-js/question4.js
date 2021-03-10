// ASSESSMENT:
// There is a div in the index.html file which will be animated
// Edit question4.css and this file for this assessment(You should do the css part in css file)

// Before animating, center this div both vertically and horizontally in the middle of viewport
// After that, when we click the buttons inside of this div
// The div should animate
// For 'Rotate 360' button, it should do 360° rotation on its center in 1 second
// For 'Go Up and Down' button, it should go up touch the top of the viewport and return to middle in 1 second
// Example is presented in question4.gif
// Don't forget to add your css and javascript to index.html file

// Grasping the HTML elements
var rotate = document.getElementById("rotate-button");
var upDown = document.getElementById("up-down-button");
var myDiv = document.getElementById("to-be-animated");

// Rotating the div when Rotate 360 button is pressed
rotate.onclick = function () {
    myDiv.classList.add("rotateAnimation");
    myDiv.onanimationend = function () {
        myDiv.classList.remove("rotateAnimation");
    };
};

// Moving the div up and down when Go Up and Down button is clicked
upDown.onclick = function () {
    myDiv.classList.add("upDownAnimation");
    myDiv.onanimationend = function () {
        myDiv.classList.remove("upDownAnimation");
    };
};
