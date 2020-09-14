var crash = document.getElementById("6");
crash.addEventListener("click", () => {
  var audioElement = new Audio("./sounds/crash.mp3");
  audioElement.addEventListener("loadeddata", () => {
    let duration = audioElement.duration;
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
  audioElement.play();
});

window.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 75) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    var audioElement = new Audio("./sounds/crash.mp3");
    audioElement.addEventListener("loadeddata", () => {
      let duration = audioElement.duration;
      // The duration variable now holds the duration (in seconds) of the audio clip
    });
    audioElement.play();
  }
});

var kick = document.getElementById("7");
kick.addEventListener("click", () => {
  var audioElement = new Audio("./sounds/kick-bass.mp3");
  audioElement.addEventListener("loadeddata", () => {
    let duration = audioElement.duration;
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
  audioElement.play();
});

window.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 76) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    var audioElement = new Audio("./sounds/kick-bass.mp3");
    audioElement.addEventListener("loadeddata", () => {
      let duration = audioElement.duration;
      // The duration variable now holds the duration (in seconds) of the audio clip
    });
    audioElement.play();
  }
});

var snare = document.getElementById("5");
snare.addEventListener("click", () => {
  var audioElement = new Audio("./sounds/snare.mp3");
  audioElement.addEventListener("loadeddata", () => {
    let duration = audioElement.duration;
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
  audioElement.play();
});

window.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 74) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    var snare = document.getElementById("5");
    snare.addEventListener("click", () => {
      var audioElement = new Audio("./sounds/snare.mp3");
      audioElement.addEventListener("loadeddata", () => {
        let duration = audioElement.duration;
        // The duration variable now holds the duration (in seconds) of the audio clip
      });
      audioElement.play();
    });
  }
});

var tom4 = document.getElementById("4");
tom4.addEventListener("click", () => {
  var audioElement = new Audio("./sounds/tom-4.mp3");
  audioElement.addEventListener("loadeddata", () => {
    let duration = audioElement.duration;
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
  audioElement.play();
});

window.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 70) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    var tom4 = document.getElementById("4");
    tom4.addEventListener("click", () => {
      var audioElement = new Audio("./sounds/tom-4.mp3");
      audioElement.addEventListener("loadeddata", () => {
        let duration = audioElement.duration;
        // The duration variable now holds the duration (in seconds) of the audio clip
      });
      audioElement.play();
    });
  }
});

var tom3 = document.getElementById("3");
tom3.addEventListener("click", () => {
  var audioElement = new Audio("./sounds/tom-3.mp3");
  audioElement.addEventListener("loadeddata", () => {
    let duration = audioElement.duration;
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
  audioElement.play();
});

var tom2 = document.getElementById("2");
tom2.addEventListener("click", () => {
  var audioElement = new Audio("./sounds/tom-2.mp3");
  audioElement.addEventListener("loadeddata", () => {
    let duration = audioElement.duration;
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
  audioElement.play();
});

var tom1 = document.getElementById("1");
tom1.addEventListener("click", () => {
  var audioElement = new Audio("./sounds/tom-1.mp3");
  audioElement.addEventListener("loadeddata", () => {
    let duration = audioElement.duration;
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
  audioElement.play();
});
