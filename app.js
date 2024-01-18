const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result =0 ;
let hitPosition ;
let currentTime=60;
let timerId=null;

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');

    hitPosition=randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown' , () => {
        if (square.id == hitPosition){
            result++;
            score.textContent= result;
            hitPosition=null;
            // Update the interval based on the result
            if (result > 5  &&  result <=10) {
                clearInterval(timerId);
                timerId = setInterval(randomSquare, 700);
            }else if (result >10 &&  result <=15){
                clearInterval(timerId);
                timerId = setInterval(randomSquare, 400);
            }
        }
    });
});

function moveMole(){
    timerId= setInterval(randomSquare,1000);
}

moveMole();

function countDown(){
    currentTime--
    timeLeft.textContent= currentTime;

    if (currentTime== 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert("GAME OVER ! Your final score is " + result);
    }
}
let countDownTimerId = setInterval(countDown,1000);