import React from 'react';


const Converter = () => {
  
  return (
    <div>
      <h1>Convert File Types (mobile)</h1>
      <input id="myFileInput" type="file" accept="image/*"capture="camera"></input>
      <button id="start-camera">Start Camera</button>
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    </div>
  );
};
  
export default Converter;