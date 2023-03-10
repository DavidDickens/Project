'use strict';


let name = prompt('What is your name?');
console.log(name);

alert('Hey ' + name + ' thanks for stopping by!');



let question = ['Do you think I am from the South? yes/y or no/n', 'Did I ever work in the restaurant business? yes/y or no/n', 'Do I have any siblings? yes/y or no/n', 'Do I have and kids? yes/y or no/n', 'Was I in the military? yes/y or no/n'];

function aboutMe() {
  for (let i = 0; i < question.length; i++) {
    console.log(i);
    let response = prompt(question[i]);
    if (response === 'yes' || response === 'y') {
      alert('good!');
    } else {
      alert('wrong');
    }
  }
}

aboutMe();



function numberGame() {
  let num = 5; // guessed number .

  let tries = 4; // number of tries


  for (let i = 0; i < 4; i++) {

    let qSix = prompt('Lets play a game, pick a number between 1-10.');

    if (qSix == num) {
      alert(`You win! Correct number was ${num}`);
      break;
    } else if (qSix > num) {
      alert('Your guess is high!');
    } else if (qSix < num) {
      alert('Your guess is low!');
    }
  }
  tries--;
  console.log(tries);
}

numberGame();

function hobbies() {

  let ans = ['reading', 'sports', 'cooking', 'gaming', 'gardening', 'thrifting'];

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
}

hobbies();
/* 
let correctAnswers = qOne + qTwo  + qThree + qFour + qFive + qSix + qSeven;
console.log(correctAnswers + "/7");
alert("Thank you for taking this quiz " + name + " you got " + correctAnswers + " out of 7 right!"); */