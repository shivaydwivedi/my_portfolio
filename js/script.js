const text = "Aspiring Backend Developer | Tech Blogger | YouTuber ";
// 
const typedText = document.getElementById("typed-text");

let index = 0;
let isDeleting = false;

function typeLoop() {
    if (!isDeleting) {
        typedText.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1500); // Pause at end before deleting
            return;
        }
    } else {
        typedText.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }

    const speed = isDeleting ? 30 : 70;
    setTimeout(typeLoop, speed);
}

document.addEventListener("DOMContentLoaded", typeLoop);
