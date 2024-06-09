//run this using node importModule.js

import { displayName } from "./Modules.mjs";
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name:',(name)=>
{
    displayName(name);
    rl.close();
})

