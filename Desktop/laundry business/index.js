// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

let show = document.querySelector("#show");
let hide = document.querySelector("#hide");
let navLinks = document.querySelector(".navLinks");

hide.style.display = "none";
navLinks.style.display = "none";
show.addEventListener("click", () => {
  hide.style.display = "flex";
  show.style.display = "none";
  navLinks.style.display = "flex";
});
hide.addEventListener("click", () => {
  hide.style.display = "none";
  show.style.display = "flex";
  navLinks.style.display = "none";
});

let drop = document.querySelectorAll("#drop");
let p_close = document.querySelectorAll(".p_close");
let p_open = document.querySelectorAll(".p_open");

p_close.forEach((close) => {
  close.style.display = "none";
});

drop.forEach((el) => {
  el.style.display = "none";
});

let inputIndex = p_close.length;
let arr = [];

for (let i = 0; i <= inputIndex; i++) {
  arr.push(i);
}

for (let e = 0; e <= arr.length; e++) {
  const val = arr[e];
  p_open[val].addEventListener("click", () => {
    p_close[val].style.display = "flex";
    p_open[val].style.display = "none";

    drop[val].style.display = "flex";
  });

  p_close[val].addEventListener("click", () => {
    p_open[val].style.display = "flex";
    p_close[val].style.display = "none";
    drop[val].style.display = "none";
  });
}
