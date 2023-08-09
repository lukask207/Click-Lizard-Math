let score = 0;
let correctAnswer = 0;  

/**
 * Generate random positions on the screen
 */

function randomPosition() {
    let lizard = document.getElementById('lizard');
    let width = window.innerWidth - 100;
    let height = window.innerHeight - 100;
    let x = Math.random() * width;
    let y = Math.random() * height;

    lizard.style.top = `${y}px`;
    lizard.style.left = `${x}px`;
}
/**
 *  Displays lizard in random position
 */
function showLizard() {
    let lizard = document.getElementById('lizard');
    lizard.style.display = 'block';
    randomPosition();

    setTimeout(() => {
        lizard.style.display = 'none';
        document.getElementById('challenge').textContent = '';  
        showLizard();
    }, 3000);  
}
/**
 * Generates numbers from 1 to 20, computes the correct answer and displays the math challenge
 */
function displayChallenge() {
    let num1 = Math.floor(Math.random() * 20+1);
    let num2 = Math.floor(Math.random() * 20+1);
    correctAnswer = num1 + num2;

    document.getElementById('challenge').textContent = `${num1} + ${num2} = ?`;
    
}
/**
 *  Checks user answers and alerts feedback to the user
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value, 10);

    if (userAnswer === correctAnswer) {
        alert("Hey! You got it right! :)");
        incrementScore();
        
    } else {
        alert(`Sorry, the answer was ${correctAnswer} try again!`);
    }

    document.getElementById('answer').value = '';  
}
/**
 * increases score if the answer is correct
 */
function incrementScore() {
    score++;
    document.getElementById('score').textContent = score;
}

showLizard();