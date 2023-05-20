import React, { useState } from 'react';

export default function BotonMusic(props) {

     function playMusic() {
        var audio = document.getElementById("audio");
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }     

  return (
    <div>
      
      <audio id="audio" src="./X2Download.app - Rick y Morty _ Intro en español _ HBO Max (128 kbps).mp3"></audio>
      <button className='btnmusic' onClick={playMusic}></button>
      
    </div>
  );
}
