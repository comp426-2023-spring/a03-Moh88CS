#!/usr/bin/env node

// bin/rps-cli.js
import { rps } from '../lib/rpsls.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const shot = args._[0]
const helpMessage = `
Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win`;

if (args.includes('-h') || args.includes('--help')) {
console.log(helpMessage);
process.exit(0);
}

if (args.includes('-r') || args.includes('--rules')) {
console.log(`Rules for Rock Paper Scissors:

Scissors CUTS Paper
Paper COVERS Rock
Rock CRUSHES Scissors`);
process.exit(0);
}
const result = rps(shot);
console.log(JSON.stringify(result));