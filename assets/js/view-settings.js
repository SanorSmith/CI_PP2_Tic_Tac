// Elements for initial game content
 const pageRender = document.getElementById("main-container");
 const howToPlay = document.getElementById("how-to-play");
 const modeSelection = document.getElementById("mode-selection");
 const scoreContent = document.getElementById("score-content");
 const boardContent = document.getElementById("board-content");
 const contactForm = document.getElementById("contact-form");
 const startButton = document.getElementById("start-button");
 const startMessages = document.getElementById("start-m");
 const aboutTheGame = document.getElementById("about-the-game");
 const gameHistory = document.getElementById('game-history');

// Function to show the initial game content
function showInitialHomeContent() {
    pageRender.style.display = "block";     // view page as block
    howToPlay.style.display = "none";
    aboutTheGame.style.display = "block";   // Show about game section
    modeSelection.style.display = "none";
    scoreContent.style.display = "none";
    boardContent.style.display = "none";
    contactForm.style.display = "none";
    gameHistory.style.display = "block";    //Show game history    
    startMessages.style.display = "none";
}

// Function to show the contact when press Contact uss button
function showContact() {
    howToPlay.style.display = "none";
    aboutTheGame.style.display = "none";
    modeSelection.style.display = "none";
    scoreContent.style.display = "none";
    boardContent.style.display = "none";
    contactForm.style.display = "block";    // Show the contact form
    gameHistory.style.display = "none";
}
// Function to show the play game content when press play button
function showPlay() {    
    aboutTheGame.style.display = "none";// Hide the about the game div
    howToPlay.style.display = "block"; // Show the Play section    
    contactForm.style.display = "none"; // Hide the contact form
    gameHistory.style.display = "none";// Hide game history section
}

window.onload = showInitialHomeContent();

// Event listener for the "Home" button
const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
    showInitialHomeContent();    
});

// Event listener for the "Play" button (added play button)
const playButton = document.getElementById("play-button");
playButton.addEventListener("click", () => {
    pageRender.style.display = "block";
    howToPlay.style.width = "100%";
    gameContent.style.width = "auto";
    showPlay();    
});

// Event listener for the "Contact Us" button
export const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", () => {
    showInitialHomeContent();
    showContact();    
});