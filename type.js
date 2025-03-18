const images = [
    "images/type_ko.png",
    "images/type_onee.png",
    "images/type_hime.png",
    "images/type_shibuya.png",
    "images/type_yamamba.png"
];

const descriptions = [
    "<span class='title'>Kogyaru コギャル </span><br>It is a compound word of “koko-sei (高校生)” meaning high school student and “gyaru (ギャル)” mainly referring to the style of underage gyaru. They have brown or blonde wavy hair, wear school uniforms with oversized cardigans and loose socks.",
    "<span class='title'>Onee-gyaru お姉ギャル </span><br>This is a mature style of gyaru, and refers to women who have graduated from high school and are working in an office. It is characterized by feminine and sophisticated fashion. Unlike other types of gyaru, it has simplified its makeup and clothing to make everyday life possible without having to sacrifice bold styling.",
    "<span class='title'>Hime-gyaru 姫ギャル </span><br>As the Japanese word for “princess” (ひめ) suggests, these are princess-themed gyaru. They enjoy wearing crowns, ribbons, lace, and other fancy accessories and Lolita-style clothes, and their characteristic hairstyle is a voluminous wavy hairstyle.",
    "<span class='title'>Shibuya-gyaru 渋谷ギャル </span><br>This is the gyaru style that has been trending in the Shibuya area of Tokyo. Shibuya-style gyaru are characterized by their unique and distinctive style, reflecting the fashion and cultural influences of the area. They prefer bold and flashy fashion, often wearing clothes with vivid colors and animal-print designs. They layer multiple layers of clothing to add a complex silhouette.",
    "<span class='title'>Yamamba-Gyaru ヤマンバギャル </span><br>The most extravagant style of gal, with tanned skin and bright bleached hair, and makeup that emphasizes white eyes and lips and uses a strong highlighter on the nose. They usually hang out in groups and were popular in the early 2000s."
];
let currentIndex = 2; 

const cards = document.querySelectorAll('.card');
const descriptionText = document.querySelector('.description');

function updateCarousel() {
    cards.forEach((card, index) => {
        let imgIndex = (currentIndex + index - 2 + images.length) % images.length;
        card.style.backgroundImage = `url(${images[imgIndex]})`;

        if (index === 1) {
            card.classList.add("prev");
            card.classList.remove("active", "next");
        } else if (index === 2) {
            card.classList.add("active");
            card.classList.remove("prev", "next");
        } else if (index === 3) {
            card.classList.add("next");
            card.classList.remove("active", "prev");
        } else {
            card.classList.remove("prev", "active", "next");
        }
    });

    descriptionText.innerHTML = descriptions[currentIndex];
}

document.querySelector('.left-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

document.querySelector('.right-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

updateCarousel();
