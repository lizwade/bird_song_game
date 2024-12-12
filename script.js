console.log("hello");
let birdList = [];
let birdSong = "";
//let audioPlayer = document.getElementById("audioSource");
  // Waits for the DOM to be fully loaded and then displays an initial joke.
  //document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);
  
  // Retrieves the "bird button" button
  const birdButton = document.getElementById("newBirdSong");
  

async function fetchData() {
    try {
      const response = await fetch(`https://xeno-canto.org/api/2/recordings?query=q:">C"+cnt:"uk"+grp:"birds"+type:"song"+len:"<10"`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      //console.log(birdList);
      // Handle your data
     // return data;
    let rNd = Math.floor(Math.random()*40);
    birdList.push([data.recordings[rNd].en,data.recordings[rNd]["file-name"]]);
    //birdSong += birdList[1][1];
    //birdList.push(data.recordings[Math.floor(Math.random()*40)].en); //we get 2?????
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle any errors
    }
  };

  let bird = fetchData();

//pull three bird objects
console.log(data);

birdButton.addEventListener("click", (audioPlayer) => {
  // Check if birdList has any data
  if (birdList.length > 0) {
      // Get the first bird's `en` (English name)
      const firstBirdName = birdList[0][0];
      const firstBirdSong = birdList[0][1];
      let audioPlayer = document.getElementById("audioSource");
      audioPlayer.src = firstBirdSong;
      console.log(audioPlayer);
      const attachedName = document.getElementById("birdSong");
      attachedName.textContent = firstBirdName;
      //console.log("First bird's name:", firstBirdName, firstBirdSong);
  } else {
      console.log("Bird list is empty. Wait for the data to load!");
  }
});
 


function retrieveBirdSong() {
    const randomIndex = Math.floor(Math.random() * data.length);
    return jokes[randomIndex];
  };
  

  function displayBirdSong(bird) {
    const birdSongElement = document.getElementById("birdSong");
    birdSongElement.textContent = bird.birdSong;
  };
  

  
// Hear the sound
//audio player triggers on load plays once. or click button to hear sound/play game.

//  guess bird / bird name
//get 3 randomised bird names with

//Get correct/incorrect




// when clicked

  // if the value is true then display correct
  // else display unlucky

