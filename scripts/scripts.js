'use strict';

const moviesEl = document.querySelector('#movies');
let seatCount = 0;
let moviePrice = moviesEl.value;


const countEl = document.querySelector('#count');
const totalEl = document.querySelector('#total');
const screenContainerEl = document.querySelector('.screen-container');

screenContainerEl.addEventListener('click', function (e) {
    if(e.target.classList.contains('seat')) {
        if(e.target.classList.contains('occupied')) {
        } else {
            e.target.classList.toggle('selected');
            const seatCountArr = document.querySelectorAll('.row .seat.selected');
            seatCount = seatCountArr.length;
        }

        countEl.innerText = seatCount;
        totalEl.innerText = seatCount * moviePrice;
    }
});



moviesEl.addEventListener('change', function() {
    moviePrice = moviesEl.value;
});