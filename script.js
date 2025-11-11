// ❤️ Button logic
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hearts = document.getElementById("hearts");

// Make "No" button move away from cursor
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// When "Yes" is clicked
yesBtn.addEventListener("click", () => {
    yesBtn.textContent = "Yaaay! 💖💍";
    createHearts();
});

// Floating hearts animation
function createHearts() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 2 + Math.random() * 3 + "s";
        heart.innerHTML = "💖";
        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
