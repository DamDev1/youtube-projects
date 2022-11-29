const showWord = document.querySelector(".word")
const showCharater = document.querySelector(".charater");

function countWord(){
    let count = 0;
    let count2 = 0;
    const word = document.getElementById("word").value;

    const split = word.split(" ");

    for(let i = 0; i< split.length; i++){
        if(split[i] != " "){
            count += 1;
        }
    }

    for(let i = 0; i< word.length; i++){
        count2 = i;
        count2 += 1;
    }

    showCharater.textContent = count2;
    showWord.textContent = count
}