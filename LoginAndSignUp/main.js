const already = document.querySelector(".already")
const dont = document.querySelector(".dont")

const signup = document.querySelector("#signup");
const login = document.querySelector("#login")

const btnSignUp = document.querySelector(".btnSignUp");

btnSignUp.addEventListener("click", () =>{
    const inputs = document.querySelectorAll("input");

    for(input of inputs){
        if(input.value == ""){
            input.style.border = "2px solid red"
        }
    }
});

already.addEventListener("click", () =>{
    signup.style.display = "none"
    login.style.display = "block"
})

dont.addEventListener("click", () =>{
    login.style.display = "none"
    signup.style.display = "block"
})