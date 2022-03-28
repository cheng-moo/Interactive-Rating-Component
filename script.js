let choices = document.querySelectorAll('ul li');
choices.forEach(choice => choice.addEventListener('click', selected))
function selected () {
    choiceArray = Array.from(choices);
    for (const item of choiceArray) {
        console.log(item);
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
        }
    }
    this.classList.toggle("selected");
}
