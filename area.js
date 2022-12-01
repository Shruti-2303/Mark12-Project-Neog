const inputs = document.querySelectorAll('.area-input');
const calculateBtn = document.querySelector('#calculate');
const outputEl = document.querySelector('#output');

function multiplyArea(base,height){
    const result = (1/2)*base*height;
    return result;
}

function calculateArea(){
    const base = Number(inputs[0].value);
    const height = Number(inputs[1].value);
    const area = multiplyArea(base,height);
    outputEl.innerText = "Area = " + area;
}

calculateBtn.addEventListener('click',calculateArea)