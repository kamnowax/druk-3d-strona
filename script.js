document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Wiadomość wysłana!");
    form.reset();
  });
}
const images = document.querySelectorAll(".card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});