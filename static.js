const birdList = [
  ["Lark", "//xeno-canto.org/773176"],
  ["Robin", "//xeno-canto.org/7756476"],
  ["Blackbird", "//xeno-canto.org/7463736"],
];

function randomOfList(list) {
  return Math.floor(Math.random() * list.length);
}
const match = birdList[0];

const iframe = document.getElementById("iframe");
const newBirdsong = document.getElementById("newBirdSong");
newBirdsong.addEventListener("click", () => {
  iframe.src = `${birdList[0][1]}/embed`;
  ///xeno-canto.org/773176/embed
});

//grab buttons and set listeners
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");

//set content of the buttons to bird names from the array, randomly
// note: for now the code is repeated rather than looping because we'll have to grab the buttons
// differently (as an array) if we want to loop over them)

function setButtonToDisplayBirdNames(button) {
  let index = Math.floor(Math.random() * birdList.length);
  button.textContent = birdList[index][0];
  birdList.splice(index, 1);
}

setButtonToDisplayBirdNames(buttonA);
setButtonToDisplayBirdNames(buttonB);
setButtonToDisplayBirdNames(buttonC);

const newBirdSongBtn = document.querySelector("#newBirdSong");
const nameBtnDiv = document.querySelector(".nameBtnBox");
nameBtnDiv.addEventListener("click", (e) => {
  if (e.target.textContent === match[0]) {
    nameBtnDiv.textContent =
      "YES! That's the bird! Press New Song to play again";
  } else {
    nameBtnDiv.textContent = "Aww, try again :(";
  }
  playAgain();
});
