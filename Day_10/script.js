let flipped = false;
let first, second;
let lock = false;
let moves = 0;
let correct = 0;
const overlay = document.getElementById('overlay');
const cards = document.querySelectorAll('.card');
const score = document.querySelector('.scoreboard');

function flip(){
    if(lock) return;
    if(this === first) return;
    this.classList.toggle('flip');
    if(!flipped){
        flipped = true;
        first = this;
        return;
    }
    flipped = false;
    second = this;
    moves++;
    score.innerHTML = 'Moves: ' + moves;
    check();
}

function check(){
    (first.dataset.framework === second.dataset.framework)?disable():flipBack();
}

function disable(){
    first.removeEventListener('click', flip);
    second.removeEventListener('click', flip);
    correct++;
    if(correct === 6){
        setTimeout( () => {
            overlay.style.display = "block";
        },500);
    }
    reset();
}

function flipBack(){
    lock = true;
    setTimeout( () => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        reset();
    }, 1000);
}

function reset(){
    [flipped, lock] = [false, false];
    [first, second] = [null, null];
}

(function shuffle(){
    cards.forEach(card => {
        let pos = Math.floor(Math.random()*12);
        card.style.order = pos;
    });
})();

score.innerHTML = 'Moves: ' + moves;
cards.forEach(card => card.addEventListener('click', flip));
