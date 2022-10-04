'use strict';

const moviesEl = document.querySelector('#movies');

const seats = document.querySelectorAll('.row .seat:not(.occupied)');

// console.log(seats);

const countEl = document.querySelector('#count');
const totalEl = document.querySelector('#total');

// console.log(countEl);
// console.log(totalEl);

let moviePrice = moviesEl.value;
// console.log(moviePrice);

moviesEl.addEventListener('change', function() {
    moviePrice = moviesEl.value;
    console.log(moviePrice);
});