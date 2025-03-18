document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".fashion-page .item");
    const container = document.querySelector(".fashion-page");

    items.forEach(item => {
        const defaultImg = item.querySelector("img");
        const hoverImgSrc = item.dataset.hover;
        const originalSrc = defaultImg.src;

        if (hoverImgSrc) {
            item.addEventListener("mouseenter", () => {
                defaultImg.src = hoverImgSrc;
                defaultImg.classList.add("hover-img");
                defaultImg.style.position = "absolute";
                defaultImg.style.top = "0";
                defaultImg.style.left = "60%";
                defaultImg.style.transform = "translateX(-50%)"; 
            });

            item.addEventListener("mouseleave", () => {
                defaultImg.src = originalSrc;
                defaultImg.classList.remove("hover-img"); 
                defaultImg.style.position = "static";
                defaultImg.style.transform = "none";
            });
        }
    });

    window.addEventListener("wheel", (event) => {
        event.preventDefault();
        window.scrollBy({
            left: event.deltaY * 2, 
            behavior: "smooth"
        });
    }, { passive: false });
});
