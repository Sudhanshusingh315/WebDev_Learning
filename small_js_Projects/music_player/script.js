console.log("Working");

// adding a song

const playing_audio = new Audio("./songs/lofi.mp3");

// defining play and pause buttons

const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const volumeScroller = document.querySelector("#volume-scroller");

playButton.addEventListener("click", () => {
  playing_audio.play();
  console.log("Song started playing");
});

pauseButton.addEventListener("click", () => {
  playing_audio.pause();
  console.log("Songs has been stopped ");
});

volumeScroller.addEventListener("input", () => {
  let newValue = volumeScroller.value;
  newValue = newValue / 100;
  playing_audio.volume = newValue;
  console.log(newValue);
});

setInterval(() => {
  console.log(
    `current time/duration: ${Math.floor(
      playing_audio.currentTime
    )}/${Math.floor(playing_audio.duration / 60)}:00 mins`
  );
}, 1000);
