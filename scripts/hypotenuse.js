const perpendicular = document.querySelector('#input-a');
const base = document.querySelector('#input-b');
const calculateBtn = document.querySelector('#calculate');
const outputEl = document.querySelector('#output');

function calculateSquare(p,b) {
    const sum = p*p + b*b;
    return sum;
}

function calculateHypotenuse(){
    const result = Math.sqrt(calculateSquare(perpendicular.value,base.value));
    outputEl.innerText = "Hypotenuse = " + result;
}

calculateBtn.addEventListener('click',calculateHypotenuse);