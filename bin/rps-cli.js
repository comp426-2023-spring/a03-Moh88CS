#!/usr/bin/env node

// bin/rps-cli.js
import { rps } from '../lib/rpsls.js';
import { processArgs } from './cli-helper.js';

processArgs(rps, 'node-rps', ['rock', 'paper', 'scissors']);
