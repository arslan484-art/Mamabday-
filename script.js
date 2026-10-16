const button = document.getElementById("blowButton");
const flame = document.querySelector(".flame");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    flame.style.display = "none";

    message.classList.remove("hidden");

    button.textContent = "❤️ С днём рождения, мама!";
    button.disabled = true;

    createHearts();
});

function createHearts() {
    const hearts = ["❤️", "💖", "💕", "💗", "💝", "💓"];

    for (let i = 0; i < 35; i++) {
        setTimeout(function () {
            const heart = document.createElement("div");

            heart.classList.add("heart");

            heart.textContent =
                hearts[Math.floor(Math.random() * hearts.lenght)];

            heart.style.left = Math.random() * 100 + "vw";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            heart.style.fontSize = 
            (20 + Math.random() * 25) + "px"

            document.body.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 6000);
        }, i * 120);
    }
}






