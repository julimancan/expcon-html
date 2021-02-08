// gets the audio file from the html document
const audio = document.getElementById("audio");

// variabe that keeps track of the state of audio (playing or not playing)
let isPlaying = false;

// function that plays the music unless it's already playing in that case it stops it
const playMusic = () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  } else {
    isPlaying = false;
    audio.pause();
  }
};
