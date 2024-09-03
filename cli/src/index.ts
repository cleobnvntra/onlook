#!/usr/bin/env node
import { Command } from 'commander';
import { setup } from './setup';

declare let PACKAGE_VERSION: string;

export function createProgram() {
    const program = new Command();

    program
        .name('onlook')
        .description('The Onlook Command Line Interface')
        .version(typeof PACKAGE_VERSION !== 'undefined' ? PACKAGE_VERSION : '0.0.0');

    program
        .command('new')
        .description('Create a new Onlook project from scratch')
        .action(() => console.log("Coming soon!"));

    program
        .command('setup')
        .description('Set up the current project with Onlook')
        .action(setup);

    return program;
}

if (process.env.NODE_ENV !== 'test') {
    const program = createProgram();
    program.parse(process.argv);
}