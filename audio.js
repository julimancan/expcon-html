const audio = document.getElementById("audio");

let isPlaying = false;
const playMusic = () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  } else {
		isPlaying = false;
		audio.pause();
	}
};
