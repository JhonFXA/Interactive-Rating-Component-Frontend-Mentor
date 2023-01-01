var rateCard = document.getElementById('rate-card');
var thanksCard = document.getElementById('thanks-card');
var rateResult = document.getElementById('rate');
var ratingButtons = document.querySelectorAll('.rating-btn');
var submit = document.getElementById('submit');

//Cria uma evento de click no botão de submit, a cada clique ele checará se o cliente escolheu uma das opções de avaliação
submit.addEventListener('click', () => {
    if (rateResult.innerHTML == '0') {
        alert('Please choose from one to five!');
    } else {
        rateCard.style.display = 'none';
        thanksCard.style.display = 'block';
    }
});

//Executará um evento a cada botão que for clicado
ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        //Mantém as cores dos botões de avaliação as mesmas...
        ratingButtons.forEach(button => button.style.background = 'var(--medium-blue)');
        ratingButtons.forEach(button => button.style.color = 'var(--light-grey)')

        //Enquanto muda apenas as do botão que foi clicado
        button.style.background = 'var(--orange)';
        button.style.color = 'var(--white)';

        //Escreve no HTML o valor do botão escolhido
        rateResult.innerHTML = button.value;
    })
});


