window.onload = function animateTitle() {
    var titleText = "sayre.rf.gd";
var currentWord = titleText;
var currentCharIndex = 0;
var direction = 1;
var blankTitle = "⠀"; // Blank title

function updateTitle() {
var newTitle;

if (currentCharIndex > 0) {
  newTitle = currentWord.substring(0, currentCharIndex);
} else {
  newTitle = blankTitle;
}

document.title = newTitle;

currentCharIndex += direction;

if (currentCharIndex < 0) {
  currentCharIndex = 0;
  direction = 1;
}

if (currentCharIndex > currentWord.length) {
  currentCharIndex = currentWord.length;
  direction = -1;
}

setTimeout(updateTitle, 200); // Update title every 200 milliseconds
}

updateTitle();
}

//Animates the title, with a scroll back and forth.

//Opens the nav screen

function openNav() {
    document.getElementById("nav").style.height = "100%";
}

//Closes the nav screen

function closeNav() {
    document.getElementById("nav").style.height = "0%";
}


/* What're you doing here? Just curious? The dev? Need some inspiration? Either way, I'll leave you to it. */