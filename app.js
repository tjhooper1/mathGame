const firstNumber = Math.floor(Math.random()*100);
// const firstNumber = 9
const secondNumber = Math.floor(Math.random()*100);
// const secondNumber = 9

const problem = firstNumber + secondNumber;

const topNumber = document.getElementById("tNumber");
const topNumberContainer = document.querySelector('.topNumber');
const bottomNumber = document.getElementById("bNumber");
const bottomNumberContainer = document.querySelector('.bottomNumber')
const answer = document.getElementById("answer");

topNumber.innerHTML = firstNumber;
bottomNumber.innerHTML = secondNumber;
answer.innerHTML = problem;
console.log(topNumber);

if (firstNumber < 10) {
    topNumberContainer.classList.add('singleDigit');
}
if (secondNumber < 10) {
    bottomNumberContainer.classList.add('singleDigit');
}
