// prompt('What is your secret Pass Phrase?');

// let passPhrase = prompt('Type a FOUR WORD Pass Phrase:');


// button 1
let message = 'I like the Beatles';
let message2 = message.toLowerCase();
let message3 = message.toUpperCase();
let message4 = message.length;


//button 2
console.log('button2a');
let button2a = message.split(' ');
console.log(button2a);

console.log('button2b');
let button2b = message.split(' ');
let shiftedWord = button2b.shift();
button2b.push(shiftedWord);
console.log(button2b);

console.log('button2c');
let button2c = message.split(' ');
button2c.splice(2, 0, 'secret');
console.log(button2c);


//button 3
console.log('');
console.log('button3a');
let button3a = message.split('');
console.log(button3a);

let button3b = message.split('').reverse();
console.log(button3b);

let button3c = message.split('').sort();
console.log(button3c);
