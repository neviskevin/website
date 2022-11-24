import React from 'react';
import map from "./map.png"
import map2 from "./map2.png"

import grid from "./grid.jpg"
  //    <h1>Paid Data Science Internship</h1>

const Infernoguard = () => {
  return (
    <>
    <h1 style={{marginRight: "0%",marginLeft: "200px"}}>Inferonguard LLC</h1>
    <div style={{marginRight: "20%", marginLeft: "200px", backgroundColor:"#DDDDDD"}}>

    
      
      <div id='infernoguard'>

      <img style={{border: "5px solid #555", margin: 10, width: "75%", height: "75%", textAlign: "left"}} src={map} alt="logo" />
      <div style={{paddingRight:'4px',paddingTop:"8px", width:"400px"}}>
      As part of the two person risk assesment model development team, I work on the backend. I have set up the AWS environment for running the model based on spacial input. I have written code to convert point data to geographical representation for the arc.js frontend developer. 
      <br></br><br></br>
      This will inform a client about the areas of greatest fire risk on their property.
      The core of the model comes from environmental science research involing the effects of weather (temperature, humidity), Vegitation/Moisture indexs (NDMI, NDVI), etc. Currently I am organizing a database of historical entries for the United States to improve the model's runtime.
      <br></br><br></br>
      </div>
    </div>
    <div id='infernoguard2'>

    <img style={{border: "0px solid #555", margin: 10, width: "auto", height: "200px", textAlign: "left"}} src={grid} alt="logo" />
    <div style={{width:"300px",paddingTop:"10px"}}>We are using Uber's H3 hexagonal mapping system to better represent the risk of a region. This allows users to see the risk a general area of ~30 square meters and in increments of 7x larger areas. We also display the points of highest risk for the entire map or specific region. A large-scale version with the smallest hexagons is shown in the top center of the map above.</div>
    <div id='infernoguard2'>
    <img style={{border: "0px solid #555", margin: 10, width: "auto", height: "200px", textAlign: "left"}} src={map2} alt="logo" />
    <div style={{paddingTop:"20px",width:"150px", fontSize:"14px"}}>Shown on the left is a region of interest where measures should be taken on the property to reduce fire risk. Points of highest risk and contributions of each variable will be overlayed on this display</div>
    </div>
    
    </div>
    </div></>
  );
};
  
export default Infernoguard;