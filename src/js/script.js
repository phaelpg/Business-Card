let trilho = document.querySelector(".trilho")
let body = document.querySelector("body")

trilho.addEventListener("click", () => {
  body.classList.toggle("dark")
  trilho.classList.toggle("dark")
})
