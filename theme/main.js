const checkbox = document.querySelector(".checkbox")
const html = document.querySelector("html")

checkbox.addEventListener("change", () =>{
    html.classList.toggle("dark");
})