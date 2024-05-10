const navEl = document.querySelector(".nav");
const hambergerEl = document.querySelector(".hamburger");


hambergerEl.addEventListener("click", () => {
    navEl.classList.toggle("nav--open");
    hambergerEl.classList.toggle("hamburger--open")
});

navEl.addEventListener('click', () => {
    navEl.classList.remove("nav--open");
    hambergerEl.classList.remove("hamburger--open");
})