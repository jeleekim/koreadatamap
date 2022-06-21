
// controll btn get ID 


let upSpin = document.getElementById('upSpin');
let downSpin = document.getElementById('downSpin');
let stopSpin = document.getElementById('stopSpin');
let speedUp = document.getElementById('speedUp')
let minusSpin = document.getElementById('minusSpin');


let cardBox = document.getElementById('cardBox');



stopSpin.onclick = function() {
    cardBox.classList.toggle('controll-spin');
}

speedUp.onclick = function() {
    cardBox.classList.toggle('plusSpeed');
}

