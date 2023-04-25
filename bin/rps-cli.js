#!/usr/bin/env node

// bin/rps-cli.js
import { rps } from '../lib/rpsls.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const validChoices = ['rock', 'paper', 'scissors'];
processArgs(rps, 'node-rps', validChoices, args);

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
  console.log(`Usage: ${commandName} [SHOT]\nPlay Rock Paper Scissors (RPS)\n\n  -h, --help      display this help message and exit\n  -r, --rules     display the rules and exit`);
}

function displayRules() {
  console.log(`Rules for Rock Paper Scissors:\n\n  - Scissors CUTS Paper\n  - Paper COVERS Rock\n  - Rock CRUSHES Scissors`);
}
