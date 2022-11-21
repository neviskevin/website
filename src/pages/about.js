import React from "react";
import background from "./backgroundimage.jpeg"
import linked from "./linked.png"
import profile from "./profile.png"
import git from "./25231.png"
  
const About = () => {
  return (
    <div>
      <div>             
          <div style={{margin: 50, backgroundColor:"#DDDDDD"}}>
            <div id='container'>
              <img style={{border: "5px solid #555", margin: 10, width: "200px", height: "200px", textAlign: "left"}} src={profile} alt="logo" />
                <p style={{paddingRight: 10}}><div style={{fontWeight: "bold", fontStyle: "italic"}}>Hello! </div>&emsp;My name is Kevin Bergdoll. I am a Computer Science Engineer currently based out of the greater Philidelphia area, but I am able to relocate. I am currently applying to jobs in the following fields: Information Technology, Data Science, Cloud Computing, Network engineering and Software Engineering.
                        I made this page to better introduce myself and the projects I am working on.
                        Just click the buttons above to check out my projects. 
                        There are also links to my resume, github and linkedin below
                        <br></br><br></br>
                        &emsp;In addition to technology and coding, I have a passion for environmental studies and issues. 
                        I hope to one day use my Lehigh Computer Science and Engineering degree to develop software to help the environment. 
                        I was one of the captains of my highschool swim team senior year and have continued to swim to this day. 
                        Music has also had a large influence on my life and I have learned to play the guitar and drums.
                        </p>
                    </div>
                    </div>
                    <div style={{color:'red', paddingRight:"50%"}}>Check out my <a href="https://docs.google.com/document/d/15PyYt_FwwGmaJDKvyxqD5MLxx69zvh_TlZsN1HrEdig/edit?usp=sharing">resume</a></div>

                    <div id = "container">
                    <img class = "page" style={{ width: "60%", height: "50%" }} src={background} alt="logo" />
                    <a style={{margin:10}}>
                        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
                        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="kevin-bergdoll-a2790a178" data-version="v1">
                            <a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/kevin-bergdoll-a2790a178?trk=profile-badge">
                            <img class = "badge" src={linked} alt="logo" />
                            </a></div>
                    <div>
                    <a href="https://github.com/neviskevin?tab=repositories"><img class = "badge" src={git} alt="logo" /></a>
                    </div>
                    </a>
                </div>
            </div>
    </div>
  );
};

export default About;