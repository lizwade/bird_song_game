
let birdList = [];
let birdSong = "";
const birdButton = document.getElementById("newBirdSong");
let birdData = null;
let data = [];

async function fetchData() {
    try {
      const response = await fetch(`https://xeno-canto.org/api/2/recordings?query=q:">C"+cnt:"uk"+grp:"birds"+type:"song"+len:"<10"`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
    let rNd = Math.floor(Math.random()*40);
    birdList.push([data.recordings[rNd].en,data.recordings[rNd]["url"]]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  let bird = fetchData();


  fetchData().then(() => {
    // Once bird data is fetched, attach the click event listener to the bird button
    birdButton.addEventListener("click", () => {
        // Check if birdList has any data
        if (birdList.length > 0) {
            // Get the first bird's `en` (English name) and `file-name`
            const firstBirdName = birdList[0][0];
            const firstBirdSong = birdList[0][1];
            // Update the name of the bird on the page
            const attachedName = document.getElementById("birdSong");
            attachedName.textContent = firstBirdName;
            // Update the iframe with the selected bird's file name (song)
            updateIframe(firstBirdSong);
        } else {
            console.log("Bird list is empty. Wait for the data to load!");
        }
    });
});

function updateIframe(fileName) {
  const iframe = document.getElementById('iframe');
  if (fileName) {
      // Set the iframe's src to the correct URL with the fileName
      iframe.src = `https:${fileName}/embed`;
  } else {
      // Display an error message if no fileName is found
      document.getElementById('iframeBox').innerHTML = '<p>Unable to load bird recording. Please try again later.</p>';
  }
};

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

//Store access to the iframe contents and the new song (Play birdsong) button.
const iframe = document.getElementById('iframe');
const newSongBtn = document.getElementById('newBirdSong');

//Add eventListener to New Song (play birdsong) btn
//(Works when page loaded and birdList is populated) <--------------------
//When New Song Here btn clicked
//Set #iframe src to `https:${birdList[1]["url"]}/embed`
// newSongBtn.addEventListener("click", () => {
//   iframe.src = `https:${birdList[1]["url"]}/embed`;
// })
// ;





// when clicked

  // if the value is true then display correct
  // else display unlucky

