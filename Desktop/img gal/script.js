const images = [
  "imag/img1.jpg",
  "imag/img2.jpg",
  "imag/img3.jpg",
  "imag/img4.jpg",
  "imag/img5.jpg",
  "imag/img6.jpg",
  "imag/img7.jpg",
];

let currentIndex = 0;

const imgElement = document.getElementById("gallery-image");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.src = images[currentIndex];
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  imgElement.src = images[currentIndex];
});
