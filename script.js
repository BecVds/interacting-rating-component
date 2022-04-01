const RATINGS_DIV = document.getElementById('ratingChoices');
let ratingShown = document.getElementById("numberChoice");
let ratingAmountShown = document.getElementById("ratingAmount");

const RATING_AMOUNT = 5;

let ratingChoice = '';
ratingAmountShown.innerText = RATING_AMOUNT;


function createRatingBtn(button){
    let div = document.createElement('div');
    div.className = 'ratingChoice';
    div.innerText = button;
    return div;
}

function initiateButtonAmount(){
    for (i = 1; i <= RATING_AMOUNT; i++){
        let createdElement = createRatingBtn(i);
        appendToRatingChoices(createdElement);
        addListener(createdElement);
    }
}

function appendToRatingChoices(element){
    RATINGS_DIV.appendChild(element);
}

function addListener(element){
    element.addEventListener('click', function(e){
        removeClassList();
        e.target.classList.add("ratingChoiceSelected");
        submitBtn.disabled = false;
        ratingChoice = e.target.innerText;
    })
}

function removeClassList(){
    let choices = document.getElementsByClassName('ratingChoice');
    for(let option of choices){
        option.classList.remove('ratingChoiceSelected');
    }
}

function submit() {
    cardOne.classList.remove("displayShow");
    cardOne.classList.add("displayHide");
    cardTwo.classList.remove("displayHide");
    cardTwo.classList.add("displayShow");

    ratingShown.innerText = ratingChoice;
}

initiateButtonAmount()

