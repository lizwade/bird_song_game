console.log("hello");

  // Waits for the DOM to be fully loaded and then displays an initial joke.
  //document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);
  
  // Retrieves the "bird button" button
  const birdButton = document.getElementById("newBirdSong");
  
  // Sets up a click event listener
  birdButton.addEventListener("click", fetchData());

async function fetchData() {
    try {
      const response = await fetch(`https://xeno-canto.org/api/2/recordings?query=q:">C"+cnt:"uk"+grp:"birds"+type:"song"+len:"<10"`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      //console.log(birdList);
      // Handle your data
      console.log("checking data");
      console.log(data);
     // return data;
    const birdList = await data.recordings[5];
    console.log("checking bird list");
    console.log(birdList);
    return birdList;
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle any errors
    }
   
  };

  let bird = fetchData();




  


function retrieveBirdSong() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }
  
  function displayBirdSong(bird) {
    const birdSongElement = document.getElementById("birdSong");
    birdSongElement.textContent = bird.birdSong;
  }


  
// Hear the sound
//audio player triggers on load plays once. or click button to hear sound/play game.

//  guess bird / bird name
//get 3 randomised bird names with

//Get correct/incorrect




// when clicked

  // if the value is true then display correct
  // else display unlucky

