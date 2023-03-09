'use strict'; // forces use to use proper keywords

// ask the user their name with prompt()
let name = prompt('What is your name?');
console.log(name);
//Display that name back to the user through a custom greeting welcoming them to your site.
alert('Hey ' + name + ' thanks for stopping by!');


// 5 questions y/n 

let qOne = prompt('Do you think I am from the South?').toLowerCase();

if (qOne === 'yes'){ 
  console.log('I am');
  alert('Very nice! I am from Florida.');
} else {
  alert('Sorry but thats wrong I was born in Florida.');
}

let qTwo = prompt('Do I have any siblings?').toLowerCase();
if (qTwo === 'yes'){
  console.log('Yep 4');
  alert('True sadly I have 4 brothers.');
} else {
  alert('I wish that were true.');
}

let qThree = prompt('Did I ever work in the restaurant business?').toLowerCase();
if (qThree === 'yes'){
  console.log('true');
  alert('I did, for far to long.');
} else {
  alert('Not quite I did for years.');
}

let qFour = prompt('Do I have and kids?').toLowerCase();
if (qFour === 'no'){
  console.log('Nice you got it!');
  alert('No little ones yet, nice.');
} else {
  alert('Ha no kids I still have free time.');
}

let qFive = prompt('Was I in the military?').toLowerCase();
if (qFive === 'yes'){
  console.log('Its like you know me...');
  alert('I was for a total of about 8 years.');
} else {
  alert('Sorry but I joined the Army at 19.');
}

/* 
Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
Indicates through an alert if the guess is "too high" or "too low".
It should give the user exactly four opportunities to get the correct answer.
After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.


 */


 let num = 5; // guessed number .

let tries = 4; // number of tries


for (let i = 0; i < 4; i++) {

  let qSix = prompt('Lets play a game, pick a number between 1-10.');

  if (qSix == num) {
    alert (`You win! Correct number was ${num}`);
  } else if (qSix > num) {
    alert('Your guess is high!');
  } else if (qSix < num) {
    alert('Your guess is low!');
  }

  tries--;
  console.log(tries);
}

/* As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.

Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.
As a user, I would like to know my final score so that I can know how well I did.

Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked. */

let ans = ['reading', 'sports', 'cooking', 'gaming', 'gardening', 'binge watching shows', 'thrifting', 'outdoors', 'anime'];

let guess = 6; // number of tries
let flag = false;

for (let i = 0; i < 6; i++) {

  let qSeven = prompt('What are some of the best Hobbies?');

  for (let i = 0; i < ans.length; i++) {

    if (qSeven === ans[i]) {
      alert('You win!');
      flag = true;
      break;
    }
  }

  guess--;
  console.log(guess);
  if (flag === true) {
    break;
  } else {
    alert('Nope try again ' + guess + ' tries remaning.');
  }
}
