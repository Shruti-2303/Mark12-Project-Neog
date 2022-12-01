const input = document.querySelectorAll('.angle');
const checkBtn = document.querySelector('#check');
const outputDiv = document.querySelector('#output');

function sumOfAngles(angle1,angle2,angle3){
    const sumAngles = angle1+angle2+angle3;
    return sumAngles;
}

function isTriangle(){
    const sumAngles = sumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    
    if(sumAngles === 180){
        outputDiv.innerText = "It forms a triangle";
    }
    else{
        outputDiv.innerText = "It does not form a triangle";
    }
  }

checkBtn.addEventListener('click',isTriangle);