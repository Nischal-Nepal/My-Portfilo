

document.addEventListener("DOMContentLoaded", function () {
    const text = ["Front-End Developer", "I am Er. Nischal Nepal", "I am a Developer"];
    let index = 0;
    let charIndex = 0;
    let typingText = document.querySelector(".typing-text");

    function type() {
        if (charIndex < text[index].length) {
            typingText.textContent += text[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = text[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            index = (index + 1) % text.length;
            setTimeout(type, 500);
        }
    }

    // Initially clear the content to avoid issues
    typingText.textContent = "";
    type();
});
