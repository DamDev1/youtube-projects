const copyText = document.querySelector(".btn")

copyText.addEventListener("click", () =>{
    const inputText = document.querySelector(".inputText")

    const popUp = document.querySelector(".popUp")

    if(inputText.value == ""){
        alert("input field Can't be empty")
    }else{
        inputText.select();
        inputText.setSelectionRange(0, 99999)
        
        navigator.clipboard.writeText(inputText.value)

        popUp.style.display = "block"

        setTimeout(hide, 2000)

        function hide(){
            popUp.style.display = "none"
        }
    }
})