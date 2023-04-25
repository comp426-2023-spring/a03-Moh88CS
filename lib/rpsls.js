// lib/rpsls.js
const rpslsChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const rpsChoices = ['rock', 'paper', 'scissors'];


function getResult(player, opponent) {
  if (player === opponent) {
    return 'tie';
  }

  if ((player === 'rock' && opponent === 'scissors') ||
      (player === 'paper' && opponent === 'rock') ||
      (player === 'scissors' && opponent === 'paper') ||
      (player === 'lizard' && opponent === 'spock') ||
      (player === 'spock' && opponent === 'scissors') ||
      (player === 'scissors' && opponent === 'lizard') ||
      (player === 'lizard' && opponent === 'paper') ||
      (player === 'paper' && opponent === 'spock') ||
      (player === 'spock' && opponent === 'rock') ||
      (player === 'rock' && opponent === 'lizard')) {
    return 'win';
  } else {
    return 'lose';
  }
}


function rps(player) {
  if (!rpsChoices.includes(player)) {
    throw new Error('Invalid choice. Choose from rock, paper, or scissors.');
  }

  let opponent = 'rock'

  if (player.toLowerCase() == 'rock') {

  return {player:'rock',opponent:'rock',result: getResult(player,opponent)};
}
else if(player.toLowerCase() == 'paper') {

  return {player:'paper',opponent:'rock',result: getResult(player,opponent)};
}
else if (player.toLowerCase() == 'scissors'){

  return {player:'scissors',opponent:'rock',result: getResult(player,opponent)};
}
else {
  return {player:'rock'}
}
}



function rpsls(player) {
  if (!rpslsChoices.includes(player)) {
    throw new Error('Invalid choice. Choose from rock, paper, scissors, lizard, or spock.');
  }

 let opponent = 'rock'

 if (player.toLowerCase() == 'rock') {

  return {player:'rock',opponent:'rock',result: getResult(player,opponent)};
}
else if(player.toLowerCase() == 'paper') {

  return {player:'paper',opponent:'rock',result: getResult(player,opponent)};
}
else if (player.toLowerCase() == 'scissors'){

  return {player:'scissors',opponent:'rock',result: getResult(player,opponent)};
}
else if (player.toLowerCase() == 'lizard'){

  return {player:'lizard',opponent:'rock',result: getResult(player,opponent)};
}
else if (player.toLowerCase() == 'spock'){

  return {player:'spock',opponent:'rock',result: getResult(player,opponent)};
}
else {return {player:'Spock'}}
}


export { rps, rpsls };
