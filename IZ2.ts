import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Введите x, n через пробел: ', (input) => {
    const [x, n] = input.split(' ').map(Number);
    console.log(`x: ${x}`);
    console.log(`n: ${n}`);
    let f = 1;

    for (let k = 1; k < n; k++) {
        f = f * ((Math.pow(x, 2 * k - 1) + 0.5) / (Math.pow((Math.pow(Math.E, x / k) + Math.pow(Math.pow(x, k-1), 1/k)), 0.5)));
        console.log(`${k} шаг расчета`);
        console.log(k);
    }
    const y = Math.abs(Math.atan(x)) * f;
    console.log(y);
    rl.close();
});
