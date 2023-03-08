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













