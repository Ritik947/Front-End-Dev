const container = document.querySelector('.container');
var b = 0, r = 36;
const booked = document.querySelector('.booked');
const remaining = document.querySelector('.remaining');

const book = () => {
    booked.innerHTML = "Booked Seats: " + b;
    remaining.innerHTML = "Remaining Seats: " + r;
}

book();

for (let id = 1; id <= 36; id++){
    let box = document.createElement('div');
    box.setAttribute('class','box');
    box.setAttribute('id', id);
    box.addEventListener('click',() => {
        if (!box.classList.contains('boxclicked')){
            b+=1;
            r-=1;
        }
        else{
            b-=1;
            r+=1;
        }
        box.classList.toggle('boxclicked');
        book();    
    });
    container.appendChild(box);
}