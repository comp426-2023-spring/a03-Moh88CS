#!/usr/bin/env node

// bin/rpsls-cli.js
import { rpsls } from '../lib/rpsls.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const validChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
processArgs(rpsls, 'node-rpsls', validChoices, args);

if (process.argv[2] === undefined) {
  console.error("Please provide a valid move: Rock, Paper, Scissors, Lizard, or Spock.");
  process.exit(1);
}


function processArgs(gameFunction, commandName, validChoices, args) {
  if (args.h || args.help) {
    displayHelp(commandName);
    process.exit(0);
  }

  if (args.r || args.rules) {
    displayRules();
    process.exit(0);
  }

  try {
    const playerChoice = args._[0] || gameFunction();
    const gameResult = gameFunction(playerChoice);
    console.log(JSON.stringify(gameResult));
  } catch (error) {
    console.error(error.message);
    displayHelp(commandName);
    displayRules();
    process.exit(1);
  }
}

function displayHelp(commandName) {
  console.log(`Usage: ${commandName} [SHOT]\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n\n  -h, --help        display this help message and exit\n  -r, --rules       display the rules and exit`);
}

function displayRules() {
  console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors`) 
}
