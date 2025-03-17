let user_counter = 0;
let computer_counter = 0;

const generateCompChoice = () => {
    const computer_choices = ['rock', 'paper', 'scissor'];
    const computer_option = Math.floor(Math.random() * computer_choices.length);
    const computer_guess = computer_choices[computer_option];

    return computer_guess;
}

function main(user_choice) {
    
    const computer_guess = generateCompChoice();


    document.querySelector('#player-move').innerText = user_choice;
    document.querySelector('#comp-move').innerText = computer_guess;
    
    if (computer_guess === user_choice) {
        document.querySelector('.game-screen').style.background = 'black';
        document.querySelector('.game-screen').innerText = 'Game Draw'; 
    }
    
    else if (computer_guess === 'rock' && user_choice === 'scissor') {
        document.querySelector('.game-screen').style.background = 'red';
        document.querySelector('.game-screen').innerText = 'You Lost! Rock beats Scissor'; 
        
        computer_counter += 1;
        document.querySelector('#comp-counter').innerText = computer_counter;
    }
    
    else if (computer_guess === 'paper' && user_choice === 'rock') {
        document.querySelector('.game-screen').style.background = 'red';
        document.querySelector('.game-screen').innerText = 'You Lost! Paper beats rock'; 
        
        computer_counter += 1;
        document.querySelector('#comp-counter').innerText = computer_counter;
    }
    
    else if (computer_guess === 'scissor' && user_choice === 'paper') {
        document.querySelector('.game-screen').style.background = 'red';
        document.querySelector('.game-screen').innerText = 'You Lost! Scissor beats paper'; 
        
        computer_counter += 1;
        document.querySelector('#comp-counter').innerText = computer_counter;
    }
    
    else {
        document.querySelector('.game-screen').style.background = 'green';
        document.querySelector('.game-screen').innerText = `You won! ${user_choice} beats ${computer_guess}`;
        
        user_counter += 1;
        document.querySelector('#player-counter').innerText = user_counter;
    }
    
}

let rock = document.querySelector('#rock');

rock.addEventListener(
    'click',
    () => {
        let rock = 'rock';
        main(rock);
    }
);

let paper = document.querySelector('#paper');

paper.addEventListener(
    'click',
    () => {
        let paper = 'paper';
        main(paper);
    }

);
let scissor = document.querySelector('#scissor');

scissor.addEventListener(
    'click',
    () => {
        let scissor = 'scissor';
        main(scissor);
    }
);