let choices = document.querySelectorAll('ul li');
let rate = 0;
const submit = document.querySelector('button');
const ratingContainer = document.querySelector('.wrapper');
const resultContainer = document.querySelector('.result-wrapper');
const ratingNum = document.querySelectorAll('.rating-num');
const selection = document.querySelector('.selection');
ratingNum.forEach(rate => rate.addEventListener('click', selected))
function selected (e) {
    e.preventDefault();
    ratingArray = Array.from(ratingNum);
    for (const item of ratingArray) {
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
        }
    }
    if(e.target.classList = 'rating-num') {
        e.target.classList.add('selected');
        rate = e.target.innerHTML;
        selection.innerHTML = rate;
        submit.addEventListener('click', thankYou);
    } 
    
}
submit.addEventListener('click', thankYou);
function thankYou () {
    ratingNum.forEach(rate => {
        if (rate.classList.contains('selected')) {
            resultContainer.classList.remove('visible');
            ratingContainer.classList.add('visible');
        } 
    })
    warning()
}
function warning () {
    const warning = document.createElement('div');
    warning.textContent="You need to choose 1 to 5 rating."
    warning.style.color='red';
    warning.style.marginTop='20px';
    ratingContainer.appendChild(warning);
    submit.removeEventListener('click', thankYou);  
    
}