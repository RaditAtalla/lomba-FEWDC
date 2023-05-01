const header = document.querySelector("body header:nth-child(1)")

window.addEventListener("scroll", function () {
  header.classList.toggle("move", window.scrollY > 0)
})