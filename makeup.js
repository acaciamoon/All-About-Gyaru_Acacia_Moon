document.addEventListener("DOMContentLoaded", () => {
    const character = document.querySelector(".makeup-character");
    const items = document.querySelectorAll(".makeup-item");

    let selectedEffects = new Set(); 

    items.forEach(item => {
        item.addEventListener("click", () => {
            const id = item.dataset.id;
            if (!selectedEffects.has(id)) {
                selectedEffects.add(id);
                applyMakeupEffect(id);
            }

            if (selectedEffects.size === 7) {
                startStarEffect();
            }
        });
    });

    function applyMakeupEffect(id) {
        const effect = document.createElement("img");
        effect.src = `images/makeup_face_${id}.png`;
        effect.classList.add("makeup-effect");
        effect.dataset.id = id; 
    
        
        if (id === "2" || id === "5") {
            effect.style.zIndex = "10";
        } else {
            effect.style.zIndex = "5"; 
        }
    
        const character = document.querySelector(".makeup-character");
        character.appendChild(effect);
    }

    function startStarEffect() {
        for (let i = 0; i < 20; i++) {
            setTimeout(createStar, i * 300);
        }
    }
    
    function createStar() {
        const star = document.createElement("img");
        star.src = "images/makeup_star.png";
        star.classList.add("falling-star");
    
        
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `-10vh`; 
        star.style.width = `${Math.random() * 2 + 1}vw`; 
        star.style.animationDuration = `${Math.random() * 3 + 2}s`; 
    
        document.body.appendChild(star);
    ㄴ
        setTimeout(() => star.remove(), 5000);
    }
    
});