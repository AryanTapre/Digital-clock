'use strict';
const clock  = document.getElementById('clock');

(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
})()

setInterval(function () {          // Function will run after every 1 Second.
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)



