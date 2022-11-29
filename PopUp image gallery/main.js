const image = document.querySelectorAll(".image img");
const close = document.querySelector(".close");

image.forEach(img =>{
    img.addEventListener("click", () => {
        document.querySelector(".modelBox").style.display = "block"
        document.querySelector(".modelBox .image img").src = img.getAttribute("src")
    })
})

close.addEventListener("click", () =>{
    document.querySelector(".modelBox").style.display = "none"
})