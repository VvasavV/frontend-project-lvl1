#!/usr/bin/end node

import { greet } from '../src/cli';
import evenGameProcess from '../src/even-game-process';

const playerName = greet();

evenGameProcess(playerName);
