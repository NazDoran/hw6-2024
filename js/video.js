var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;

    updateVolume();

    console.log('auto play is set to ' + video.autoplay);
    console.log('loop is set to ' + video.loop);
});

function updateVolume() {
    var volumeDisplay = document.querySelector("#volume");
    volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
}

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();

    updateVolume();
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log("Current location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted;

    if (video.muted) {
        this.textContent = "Unmute";
    } else {
        this.textContent = "Mute";
    }
});

var volumeSlider = document.querySelector("#slider");

volumeSlider.addEventListener("input", function() {
    var volume = volumeSlider.value / 100;
    video.volume = volume;

    updateVolume();
});

function updateVolume() {
    var volumeDisplay = document.querySelector("#volume");
    volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
}

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.toggle("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});


