// lib/rpsls.js
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const rpsChoices = ['rock', 'paper', 'scissors'];



function getResult(player, opponent) {
  const winConditions = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
  };

  if (player === opponent) {
    return 'tie';
  }

  return winConditions[player].includes(opponent) ? 'win' : 'lose';
}

function rps(player) {
  
  if (!rpsChoices.includes(player)) {
    throw new Error('Invalid choice. Choose from rock, paper, or scissors.');
  }

  const result = getResult(player, opponent);
  return { player, opponent, result };
}

function rpsls(player) {
  
  if (!choices.includes(player)) {
    throw new Error('Invalid choice. Choose from rock, paper, scissors, lizard, or spock.');
  }

  const result = getResult(player, opponent);
  return { player, opponent, result };
}

export { rps, rpsls };
