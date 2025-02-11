import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Введите A, B, N через пробел: ', (input) => {
    const [A, B, N] = input.split(' ').map(Number);

    console.log(`A: ${A}`);
    console.log(`B: ${B}`);
    console.log(`N: ${N}`);

    const k = (B - A) / (N - 1);
    let x = A;
    for (let m = 1; m < N; m++) {
        const y = (Math.log(Math.sqrt(Math.abs(x - 2))) + 1.2) / (2 + Math.pow(Math.E, 2)) + Math.pow(2 / x, 1 / 3);
        console.log(`${m} шаг расчета`);
        console.log(x);
        console.log(y);
        x = x + k;
    }
    rl.close();
});
