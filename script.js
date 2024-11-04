// Global variables
let numberOfFaces = 5;
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");

// Function to generate faces on the left side
function generateFaces() {
    for (let i = 0; i < numberOfFaces; i++) {
        const face = document.createElement("img");
        face.src = 'images/smile.png'; // Ensure the path to the image is correct
        face.style.top = Math.floor(Math.random() * 400) + "px";
        face.style.left = Math.floor(Math.random() * 400) + "px";
        theLeftSide.appendChild(face);
    }

    // Clone left side faces to the right side, minus one face
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    // Event listeners
    theLeftSide.lastChild.addEventListener("click", nextLevel);
    document.body.addEventListener("click", gameOver);
}

// Function to advance to the next level
function nextLevel(event) {
    event.stopPropagation();
    numberOfFaces += 5;

    // Clear the current faces
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }

    // Generate new faces
    generateFaces();
}

// Function to end the game
function gameOver() {
    alert("Game Over!");
    document.body.removeEventListener("click", gameOver);
    theLeftSide.lastChild.removeEventListener("click", nextLevel);
}

// Call the function to generate the initial set of faces on page load
window.addEventListener("load", generateFaces);
