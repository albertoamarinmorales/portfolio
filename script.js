    let getLetter = () =>{
        let  letter = [' a ',' b ',' c ',' d ',' e ',' f ',' g ',' h ',' i ',' j ',' k ',' l ',' m ',' n ',' o ',' p ',' q ',' r ',' s ',' t ',' u ',' v ',' w ',' x ',' y ',' z '];
        let takeLetter = '';
        for (let i = 0; i < 1350; i++) {
           switch (i){
            case 600:
                takeLetter += `<div class="showName" id=$div${i}>ALBERTO</div>`;
                break;
            }
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
        letters[randomLetter].classList.add('letterPurple');
        setTimeout(() => {
        letters[randomLetter].classList.add('letterOff');
    }, 500);
    }else{
        letters[randomLetter].classList.add('letterBlue');
        setTimeout(() => {
        letters[randomLetter].classList.add('letterOff');
    }, 500);
    }
}

setInterval(lightUpLetter, 100);