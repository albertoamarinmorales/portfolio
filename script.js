    let getLetter = () => {
        let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let takeLetter = '';
        for (let i = 0; i < 600; i++) {
            takeLetter += `<div class="letter" id=$div${i}>${letter[Math.floor(Math.random() * 26)]}</div>`;
        }
        return takeLetter;
    }
let header = document.getElementsByTagName('header')[0]
header.innerHTML = getLetter();

let letters = document.querySelectorAll('.letter');     

function lightUpLetter() {
    let randomLetter = Math.floor(Math.random() * letters.length);
    if (randomLetter % 2 == 0){
        letters[randomLetter].classList.toggle('letterPurple');
    }else{
        letters[randomLetter].classList.toggle('letterBlue');
        
    }
}

setInterval(lightUpLetter, 50);


function info(x) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`info${i}`).style.display = 'none';
    }
    document.getElementById(`info${x}`).style.display = 'block';
}