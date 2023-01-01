function submit(){
    var rateCard = document.querySelector('div#rate-card');
    var thanksCard = document.querySelector('div#thanks-card');
    var rateResult = document.getElementById('rate');

    
    if (ratingButtons[0].classList.contains('selected')) {
        rateResult.innerText = '1';
    } else if (ratingButtons[1].classList.contains('selected')) {
        rateResult.innerText = '2';
    } else if (ratingButtons[2].classList.contains('selected')) {
        rateResult.innerText = '3';
    } else if (ratingButtons[3].classList.contains('selected')) {
        rateResult.innerText = '4';
    } else if (ratingButtons[4].classList.contains('selected')) {
        rateResult.innerText = '5';
    }


    
    rateCard.classList.remove('active');
    thanksCard.classList.add('active');
    
    
}


var ratingButtons = document.getElementsByClassName('rating-btn');


ratingButtons[0].addEventListener('click', function(){
    ratingButtons[0].classList.add('selected');
    ratingButtons[1].classList.remove('selected');
    ratingButtons[2].classList.remove('selected');
    ratingButtons[3].classList.remove('selected');
    ratingButtons[4].classList.remove('selected');

    ratingButtons[0].setAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[1].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[2].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[3].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[4].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
});

ratingButtons[1].addEventListener('click', function(){
    ratingButtons[0].classList.remove('selected');
    ratingButtons[1].classList.add('selected');
    ratingButtons[2].classList.remove('selected');
    ratingButtons[3].classList.remove('selected');
    ratingButtons[4].classList.remove('selected');

    ratingButtons[0].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[1].setAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[2].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[3].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[4].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
});
ratingButtons[2].addEventListener('click', function(){
    ratingButtons[0].classList.remove('selected');
    ratingButtons[1].classList.remove('selected');
    ratingButtons[2].classList.add('selected');
    ratingButtons[3].classList.remove('selected');
    ratingButtons[4].classList.remove('selected');

    ratingButtons[0].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[1].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[2].setAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[3].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[4].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
});
ratingButtons[3].addEventListener('click', function(){
    ratingButtons[0].classList.remove('selected');
    ratingButtons[1].classList.remove('selected');
    ratingButtons[2].classList.remove('selected');
    ratingButtons[3].classList.add('selected');
    ratingButtons[4].classList.remove('selected');

    ratingButtons[0].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[1].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[2].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[3].setAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[4].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
});
ratingButtons[4].addEventListener('click', function(){
    ratingButtons[0].classList.remove('selected');
    ratingButtons[1].classList.remove('selected');
    ratingButtons[2].classList.remove('selected');
    ratingButtons[3].classList.remove('selected');
    ratingButtons[4].classList.add('selected');

    ratingButtons[0].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[1].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[2].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[3].removeAttribute('style', 'background-color: var(--orange); color: var(--white);');
    ratingButtons[4].setAttribute('style', 'background-color: var(--orange); color: var(--white);');
});
