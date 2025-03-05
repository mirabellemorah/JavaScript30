function playSound(e) {
    // Determine if the event is from a key press or a click
    const keyCode = e.type === "keydown" ? e.code : e.target.closest(".key")?.dataset.key;

    if (!keyCode) return;

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!audio) return; // Stop the function if no audio is found

    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return; // Skip if it's not a transform
    this.classList.remove("playing");
}

// Select all key elements
const keys = document.querySelectorAll(".key");

// Add event listener for transition end
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// Listen for keydown events
window.addEventListener("keydown", playSound);

// Add click event listeners to each key
keys.forEach(key => key.addEventListener("click", playSound));

////////////################////////////

/*

function playSound(e) {

const audio = this.document.querySelector(`audio[data-key="${e.code}"]`);
const key = this.document.querySelector(`.key[data-key="${e.code}"]`);

if (!audio) return; // stop the function

audio.currentTime = 0; // rewind to the start

    audio.play();
    key.classList.add("playing");
 };

 function removeTransition(e) {

  if (e.propertyName !== "transform") return; // skip if it's not a transform
 this.classList.remove("playing");
 };

 const keys = document.querySelectorAll(".key");
 ; ''
 keys.forEach(key => key.addEventListener("transitionend", removeTransition));

 window.addEventListener("keydown", playSound);

//How It Works
//Press a key (e.g., "A").
//The function finds the matching sound and key element.
//The sound plays, and an animation is added.
//When the animation ends, it gets removed so it's ready for the next press.

*/
