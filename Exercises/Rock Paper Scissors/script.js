const  playerScore = document.getElementById('player-score');
const  hands = document.getElementById('hands');
const  result = document.getElementById('result');
let resultScore = 0;


function getComputerChoice(){
	const rpsChoice = ['rock', 'paper', 'scissors'];
	const randomChoice = Math.floor(Math.random() * 3);
	return rpsChoice[randomChoice];
}

function getResult(playerChoice, computerChoice){

	let  score;
	if (playerChoice === computerChoice){
		score = 0;
	}else{
		switch (playerChoice){
			case 'rock':
				if (computerChoice === 'paper'){
					score = -1;
				}else if(computerChoice === 'scissors'){
					score = 1;
				}
				break;
			case 'paper':
				if (computerChoice === 'scissors'){
					score = -1;
				}else if(computerChoice === 'rock'){
					score = 1;
				}
				break;
			case 'scissors':
				if (computerChoice === 'rock'){
					score = -1;
				}else if(computerChoice === 'paper'){
					score = 1;
				}
				break;
		}

	}
	return score;

}

function showResult(score, playerChoice, computerChoice){
	hands.innerText = '👱' + playerChoice + ' vs ' + '🤖' + computerChoice;
	switch (score){
		case -1:
			result.innerText = "You lose!";
			resultScore--;
		break;
		case 0:
			result.innerText = "It's a draw!";
		break;
		case 1:
			result.innerText = "You win!";
			resultScore++;
	}
	playerScore.innerText = resultScore.toString();

}

function onClickRPS(playerChoice){
	const computerChoice = getComputerChoice();
	const score = getResult(playerChoice, computerChoice);
	showResult(score, playerChoice, computerChoice);
}

function playGame(){
	const rpsButtons = document.querySelectorAll('.rpsBtn');
	rpsButtons.forEach(rpsButton => {
		rpsButton.onclick = () => onClickRPS(rpsButton.value);
	})
}

function stopGame(){
	resultScore = 0;
	playerScore.innerText = '';
	hands.innerText = '';
	result.innerText = '';
}

playGame();