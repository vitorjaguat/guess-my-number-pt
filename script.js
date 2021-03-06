'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    // console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);

    if (!guess || guess < 1 || guess > 20) {
        document.querySelector('.message').textContent = 'π« NΓΊmeros de 1 a 20, Γ΄ manΓ©!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'π Acertouuu!';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'π Muito alto!' : 'π Muito baixo!';;
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'π GAME OVER π';
            document.querySelector('.score').textContent = 0
        }
    }

    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'π Muito alto!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'π GAME OVER π';
    //         document.querySelector('.score').textContent = 0
    //     }
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'π Muito baixo!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'π GAME OVER π';
    //         document.querySelector('.score').textContent = 0
    //     }
    // }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Insira o nΓΊmero...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

});