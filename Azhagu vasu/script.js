const openBtn = document.getElementById("openBtn");
const messageBtn = document.getElementById("messageBtn");

const opening = document.getElementById("opening");
const birthday = document.getElementById("birthday");
const finalMessage = document.getElementById("finalMessage");

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");


// Open birthday surprise

openBtn.addEventListener("click", () => {

    opening.classList.add("hidden");

    birthday.classList.remove("hidden");

    // Start music after user interaction
    music.play()
        .then(() => {
            musicBtn.textContent = "🔊";
        })
        .catch(() => {
            console.log("Music could not start.");
        });

});


// Show final message

messageBtn.addEventListener("click", () => {

    birthday.classList.add("hidden");

    finalMessage.classList.remove("hidden");

});


// Music ON / OFF

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.textContent = "🔊";

    } else {

        music.pause();

        musicBtn.textContent = "🔇";

    }

});

const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.25;

document.addEventListener("click", function startMusic() {
    bgMusic.play().catch(() => {});
    document.removeEventListener("click", startMusic);
});