const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closeBtn");

hamburger.onclick = () => {
    menu.classList.add("active");
};

closeBtn.onclick = () => {
    menu.classList.remove("active");
};
