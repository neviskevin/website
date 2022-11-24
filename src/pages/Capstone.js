import React from 'react';
  
const Capstone = () => {
  return (
    <div>
    <h1>Capstone Presentation 2020</h1>
      <div id="container">
        <embed src="capstone.pdf" width="1100px" height="500px" />
        <div style={{paddingTop:'25px',paddingRight:'25px',paddingLeft:'25px', backgroundColor: 'white', width:"800px"}}>
        If PDF doesnt show reload page.
        <br></br><br></br>
        My sophomore (spring) to junior (fall), I completed my capstone project, lead by an electrical systems expert and machine learning professor. We were tasked with evaluating the risk of renewable energy implementation into the NYISO grid based on temporal and spacial data. On the left is the final presentation slides we presented in the beginning of 2021.
        <br></br><br></br>
        I was assigned the energy demand which I represented for each metering region as a separate 3 dimensional graph. The congestion cost, represented by the size of the points, is the inefficiencies in the grid, this is due to the underpredicted supply of electricity on the day ahead market. These are the places and times of highest risk. Other trends in the energy demand was investigated using python in jupyter environments.
        <br></br><br></br>
        Continued work on this multi year project was to evaluate the risk of solar and wind generation to guide investment using a risk evaluation of every asset on the grid.
        </div>
      </div>
    </div>
  );
};
  
export default Capstone;