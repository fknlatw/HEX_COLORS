const btn = document.querySelector(".btn");
const hexCode = document.getElementById("hex-code");
const body = document.getElementsByTagName("body")[0];

btn.addEventListener("click", changeColor);

function changeColor(){

    let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    let hexcode = "";

    for(let i = 0; i < 6; i++){

        let random_index = Math.floor(Math.random() * hex_numbers.length);

        hexcode += hex_numbers[random_index];

    }

    hexCode.innerHTML = hexcode;

    body.style.background = `#${hexcode}`;
    
}
