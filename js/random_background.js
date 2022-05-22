const background = [
    "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"
]
const body = document.querySelector("body");
const selectImg = background[Math.floor(Math.random() * background.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${selectImg}`;
document.body.prepend(bgImg);