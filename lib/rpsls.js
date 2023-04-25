// lib/rpsls.js
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const rpsChoices = ['rock', 'paper', 'scissors'];

function getRandomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

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
  player = player.toLowerCase();
  if (!rpsChoices.includes(player)) {
    throw new Error('Invalid choice. Choose from rock, paper, or scissors.');
  }

  const opponent = getRandomChoice(rpsChoices);
  const result = getResult(player, opponent);
  return { player, opponent, result };
}

function rpsls(player) {
  player = player.toLowerCase();
  if (!choices.includes(player)) {
    throw new Error('Invalid choice. Choose from rock, paper, scissors, lizard, or spock.');
  }

  const opponent = getRandomChoice(choices);
  const result = getResult(player, opponent);
  return { player, opponent, result };
}

export { rps, rpsls };
