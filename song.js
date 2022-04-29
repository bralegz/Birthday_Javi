const clickButton = document.querySelector("button");
var audio = new Audio('HBSong.mp3');

clickButton.addEventListener("click", () => {
    audio.play();
});