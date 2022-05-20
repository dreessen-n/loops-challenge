// 1. function console.logs odds from 1-20

function oddsOne2Twenty() {
    for (var i = 1; i <= 20; i+=2) {
        console.log(i);
    }
}
console.log(`\n1. function console.logs odd numbers from 1-20:\n`)
oddsOne2Twenty();

// 2. function decreases from 100 in even div multiples of 3

function decreaseBy3() {
    for (i = 100; i > 0; i--) {
        if ((i % 3) == 0) {
            console.log(i);
        }
    }
}
console.log(`\n2. function decreases from 100 in multiples of 3:\n`)
decreaseBy3();

// Print the sequence: 4, 2.5, 1, -0.5, -2, -3.5
// redo after seeing soluton did not want me to 
// create an array but do a with a fractional countdown

function printSeq() {
    for (i = 4; i >= -4; i-=1.5) {
        console.log(i);
    }
}
console.log(`\n3. function prints a sequence:\n`)
printSeq();

// sigma

var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`\n4. Sigma:\n`)
console.log(sum);

// Factorial

var product = 1;

for (i = 1; i < 13; i++) {
    product *= i;
}
console.log(`\n5. Factorial:\n`)
console.log(product);
