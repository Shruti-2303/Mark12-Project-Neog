const quizForm = document.querySelector('.quiz-form');
const submitButton = document.querySelector('#submit-answers');
const outputEl = document.querySelector('#output');

const correctAnswers = ["90","Right Angled","Right Angled","4,3,5","a+b+c"]

function calculateScore(){
    let score = 0;
    let i = 0;
    const formdata = new FormData(quizForm);

    for(let value of formdata.values()){
        if(value === correctAnswers[i]){
            score = score + 1;
        }
        i = i + 1;
        outputEl.innerText = "Your score is : " + score;
    }
}

submitButton.addEventListener('click',calculateScore);