console.log("Working");

// adding a song

const playing_audio = new Audio("./songs/lofi.mp3");

// defining play and pause buttons

const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const volumeScroller = document.querySelector("#volume-scroller");

// defining progress bar

const progress = document.querySelector(".progress");

// starts coding here

playButton.addEventListener("click", () => {
  playing_audio.play();
  console.log("Song started playing");
  setInterval(function () {
    updatingbar(value);
  }, 1000);
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

// showing current time and playing porgress bar along with it

setInterval(() => {
  console.log(
    `current time/duration: ${Math.floor(
      playing_audio.currentTime
    )}/${Math.floor(playing_audio.duration / 60)}:00 mins`
  );
  console.log("Buffer: ", playing_audio.buffered);
}, 1000);

// Creating a progress bar



let value = 0;
const updatingbar = () => {
  let progress = document.querySelector(".progress");
  progress.firstElementChild.style.width = `${value}%`;
  value++;
  console.log(progress);
};

