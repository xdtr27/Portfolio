export function seeMore() {
  const body = document.querySelector("body");
  const main = document.querySelector("main");

  body.classList.toggle("scroll-lock");
  main.classList.toggle("blur");
  document.querySelector(".modal").classList.toggle("show-modal");
}