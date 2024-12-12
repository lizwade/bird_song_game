console.log("hello");
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

  fetchData();

// async function birdData() {
// const birdList = await fetchData();  
// return birdList;  
// };



