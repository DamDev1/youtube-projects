const container = document.querySelector(".container")
const generate = document.querySelector(".generate")
const qrInput = document.querySelector(".form input")
const qrImg = document.querySelector(".qrCode img")

generate.addEventListener("click", () =>{
    const input = qrInput.value;
    if(!input) return false;

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${input}`

    generate.textContent = "Generating QR Code......"

    qrImg.addEventListener("load", () =>{
        container.classList.add("active");
        generate.textContent = "Generating QR Code"
    })
})