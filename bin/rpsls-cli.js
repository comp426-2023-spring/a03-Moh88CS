#!/usr/bin/env node

// bin/rpsls-cli.js
import { rpsls } from '../lib/rpsls.js';
import { processArgs } from './cli-helper.js';

processArgs(rpsls, 'node-rpsls', ['rock', 'paper', 'scissors', 'lizard', 'spock']);
