const text1 = `"Gyaru" is a Japanese loanword derived from the English word "Girl."`;
const text2 = `The early emergence of gyaru was an important cultural phenomenon that began in Shibuya 109 in Tokyo in the mid-1990s, and it gained attention by emphasizing the self-expression and individuality of young women with a flashy and bold style that challenged traditional Japanese aesthetic standards.`;
const text3 = `The 2000s was the heyday of the gyaru culture, which continued to evolve into styles of various genres.`;
const text4 = `In the 2010s, the gyaru culture began to decline gradually. This was due to changes in social trends and fashion trends. Many gyaru magazines were discontinued, and the number of people who followed the gyaru style also decreased.`;
const lastText = `Since the 2020s, the development of social media has led to various content creators sharing tutorials on gyaru makeup and fashion tips, and the gyaru style is once again gaining popularity not only in Japan but also around the world.`;

const typingText = document.getElementById('typingText');
const nextButton = document.getElementById('nextButton');
const overlayImage = document.getElementById('overlayImage');
const background = document.getElementById('background');
const overlay = document.getElementById('overlay');

let index = 0;
let isTyping = false;
let clickCount = 0;

function typeText(text, callback) {
    typingText.innerHTML = ''; 
    index = 0;
    isTyping = true;
    nextButton.classList.remove('pulse-animation'); 

    function type() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 20); 
        } else {
            isTyping = false;
            if (callback) callback();
            nextButton.classList.add('pulse-animation'); 
        }
    }
    type();
}

const style = document.createElement('style');
style.innerHTML = `
    .pulse-animation {
        animation: pulse 1s infinite alternate ease-in-out;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        100% { transform: scale(1.2); }
    }
`;
document.head.appendChild(style);

window.onload = () => typeText(text1);

nextButton.addEventListener('click', () => {
    if (isTyping) return; 
    nextButton.classList.remove('pulse-animation'); 

    typingText.innerHTML = ''; 

    if (clickCount === 0) {
        typeText(text2);
        overlayImage.style.opacity = 1;
    } else if (clickCount === 1) {
        overlayImage.style.opacity = 0;
        background.style.backgroundColor = "#FFFFFF";
        background.style.opacity = 0;
        setTimeout(() => {
            typeText(text3);
            background.style.backgroundImage = "url('images/history_4gyaru.jpg')";
            background.style.opacity = 1;
        }, 1000);
    } else if (clickCount === 2) {
        let opacity = 0;
        typeText(text4, () => {
            overlay.style.opacity = 1;
        });
        const fadeIn = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.01;
                overlay.style.opacity = opacity;
            } else {
                clearInterval(fadeIn);
            }
        }, 20);
    } else if (clickCount === 3) {
        let opacity = 1;
        const fadeOut = setInterval(() => {
            if (opacity > 0) {
                opacity -= 0.01;
                overlay.style.opacity = opacity;
            } else {
                clearInterval(fadeOut);
                background.style.backgroundImage = "url('images/history_last.jpg')";
                background.style.opacity = 1;
                typeText(lastText);
            }
        }, 20);
    }

    clickCount++;
});