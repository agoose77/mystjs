#!/usr/bin/env node
import commander from 'commander';
import version from '../version';
import { addCheckCLI } from './check';

const program = new commander.Command();

addCheckCLI(program);

program.version(`v${version}`, '-v, --version', 'Print the current version of jtex');
program.option('-d, --debug', 'Log out any errors to the console.');
program.parse(process.argv);
