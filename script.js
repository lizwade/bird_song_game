console.log("hello");
async function fetchData() {
    try {
      const response = await fetch(`https://xeno-canto.org/api/2/recordings?query=q:">C"+cnt:"uk"+grp:"birds"+type:"song"+len:"<10"`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const birdList = data.recordings;
      console.log(birdList);

      //console.log(data);
      // Handle your data
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle any errors
    }
  }

// async function birdData() {
// const birdList = await fetchData();  
// return birdList;  
// };


//fetchData();
// console.log(birdList);
// console.log(birdList[0]);