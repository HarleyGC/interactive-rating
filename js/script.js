let ratingContainer = document.querySelector('.rating-container');
let thxContainer = document.querySelector('.thx-container');
let submitBtn = document.querySelector('.btn');
let counterRate = document.querySelector('.counter__rate');
let numberContainer = document.querySelector('.content__rating');

numberContainer.addEventListener('click', event => {
    
    let selectedNumber = event.target.innerText;

    if(selectedNumber > 0 && selectedNumber <= 5) {
    
    counterRate.innerText = selectedNumber;

    submitBtn.addEventListener('click', () => {
        ratingContainer.style.display = 'none';
        thxContainer.style.display = 'flex';
    });
}

})



