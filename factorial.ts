import { kMaxLength } from 'buffer';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Введите k:', (input) => {
    let k = Number(input);
    console.log(`k: ${k}`);
    let y = 1;

    for (let m = 2; m <= k; m++) {
        y = y * m;
        console.log(`${k} шаг расчета`);
    }
    console.log(y);
    rl.close();
});