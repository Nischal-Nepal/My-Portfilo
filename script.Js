document.addEventListener("DOMContentLoaded", function () {
    const text = ["Front-End Developer", "Passionate Coder", "Web Designer"];
    let index = 0;
    let charIndex = 0;
    let typingText = document.querySelector(".typing-text");

    function type() {
        if (charIndex < text[index].length) {
            typingText.innerHTML += text[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.innerHTML = text[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            index = (index + 1) % text.length;
            setTimeout(type, 500);
        }
    }

    type();
});