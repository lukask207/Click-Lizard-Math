let score = 0;
let correctAnswer = 0;  // Store the correct answer to the math challenge.



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
 * 
 */
function showLizard() {
    let lizard = document.getElementById('lizard');
    lizard.style.display = 'block';
    randomPosition();

    setTimeout(() => {
        lizard.style.display = 'none';
        document.getElementById('challenge').textContent = '';  // Clear the challenge when lizard disappears.
        showLizard();
    }, 3000);  
}

function displayChallenge() {
    let num1 = Math.floor(Math.random() * 20+1);
    let num2 = Math.floor(Math.random() * 20+1);
    correctAnswer = num1 + num2;

    document.getElementById('challenge').textContent = `${num1} + ${num2} = ?`;
    
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value, 10);

    if (userAnswer === correctAnswer) {
        alert("Hey! You got it right! :)");
        incrementScore();
        
    } else {
        alert(`Sorry, the answer was ${correctAnswer} try again!`);
    }

    document.getElementById('answer').value = '';  // Clear input field after checking.
}

function incrementScore() {
    score++;
    document.getElementById('score').textContent = score;
}

showLizard();