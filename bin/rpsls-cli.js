#!/usr/bin/env node

// bin/rpsls-cli.js
import { rpsls, getRandomChoice } from '../lib/rpsls.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const validChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
processArgs(rpsls, 'node-rpsls', validChoices, args);



function processArgs(commandName, args) {
  if (args.h || args.help) {
    displayHelp(commandName);
    process.exit(0);
  }

  if (args.r || args.rules) {
    displayRules();
    process.exit(0);
  }

  try {
    const playerChoice = args._[0]
    console.log(JSON.stringify(rpsls(playerChoice)));
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


