let firstNumber = Math.floor(Math.random()*100);
let secondNumber = Math.floor(Math.random()*100);
let problem = firstNumber + secondNumber
const topNumber = document.getElementById("tNumber");
const topNumberContainer = document.querySelector('.topNumber');
const bottomNumber = document.getElementById("bNumber");
const bottomNumberContainer = document.querySelector('.bottomNumber')
const answer = document.getElementById("answer");
const output = document.querySelector('.output');
const playerAnswer = document.querySelector('.playerAnswer');
const button = document.querySelector('.button');
const answerInput = document.getElementById("answerInput");
const checkAnswer = document.getElementById("checkAnswer");


button.addEventListener('click', function(){
    console.log("clicked");
    checkFormat();
    
    firstNumber = Math.floor(Math.random()*100);
    secondNumber = Math.floor(Math.random()*100);
    problem = firstNumber + secondNumber;
    playerAnswer.classList.remove('hidden');
    play();
});

checkAnswer.addEventListener('click', function(){
     
    
    if(isNormalInteger(answerInput.value)){

    }else{
        alert("not a number");
        clearAnswerInputField();
    }
    if(answerInput.value == problem){
        
        playerAnswer.classList.add('hidden');
        output.classList.remove('hidden');
        output.innerHTML = `<h1 id="goodAnswer">${problem}</h1>`;
        
    }else{
        playerAnswer.classList.add('hidden');
        output.classList.remove('hidden');
        output.innerHTML = `<h1 id="badanswer">${problem}</h1>`;
    }
    
    clearAnswerInputField();

})

function play(){

    output.classList.add('hidden');
    checkFormat()
    
    topNumberContainer.innerHTML = `<h1 id="tNumber">${firstNumber}</h1>` ;
    bottomNumberContainer.innerHTML = `<h1 id="bNumber">${secondNumber}</h1>`; 
    
}


function checkFormat() {
    if (firstNumber < 10 && !topNumberContainer.classList.contains('singleDigit')) {
        topNumberContainer.classList.add('singleDigit');
    }
    if(firstNumber > 9 && topNumberContainer.classList.contains('singleDigit')){
        topNumberContainer.classList.remove('singleDigit');
    }
    if (secondNumber < 10) {
        bottomNumberContainer.classList.add('singleDigit');
    }
    if(secondNumber > 9){
        bottomNumberContainer.classList.remove('singleDigit');
    }
}

function isNormalInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}

function clearAnswerInputField(){
    answerInput.value = "";    
}

play();
