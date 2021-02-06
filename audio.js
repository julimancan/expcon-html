// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioCtx = new AudioContext();

// const audioElement = document.querySelector('audio');
// const track = audioCtx.createMediaElementSource(audioElement);

// const playButton = document.querySelector('.tape-controls-play');

// // play pause audio
// playButton.addEventListener('click', function() {
	
// 	// check if context is in suspended state (autoplay policy)
// 	if (audioCtx.state === 'suspended') {
// 		audioCtx.resume();
// 	}
	
// 	if (this.dataset.playing === 'false') {
// 		audioElement.play();
// 		this.dataset.playing = 'true';
// 	// if track is playing pause it
// 	} else if (this.dataset.playing === 'true') {
// 		audioElement.pause();
// 		this.dataset.playing = 'false';
// 	}
	
// 	let state = this.getAttribute('aria-checked') === "true" ? true : false;
// 	this.setAttribute( 'aria-checked', state ? "false" : "true" );
	
// }, false);

// // if track ends
// audioElement.addEventListener('ended', () => {
// 	playButton.dataset.playing = 'false';
// 	playButton.setAttribute( "aria-checked", "false" );
// }, false);


const x = document.getElementById("audio");

function playSong() {
	x.play();
};

function pauseSong(){
	x.pause();
};

let isPlaying = false;
function playMusic() {
	console.log(isPlaying)
	if (isPlaying) {
		pauseSong();
		isPlaying = false;
		console.log(isPlaying, "set to pause");
} else {
		if (!isPlaying) {
			isPlaying = true;
			playSong();
			console.log(isPlaying, "set to play");
		}
	}
}
