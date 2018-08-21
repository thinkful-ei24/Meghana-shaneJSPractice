'use strict';

function jediName(firstName,lastName) {
  return  lastName.slice(0,3)+firstName.slice(lastName.length-2,lastName.length-1);

}

function toInfinity(num) {
  if(!isFinite(num)) {
    console.log('And beyond');
  } else if(isFinite(num) && num < 0) {
    console.log('To negative infinity');
  } else if(isFinite(num) && num > 0) {
    console.log('To infinity');
  } else if(num === 0) {
    console.log('Staying home');
  }
}

function crackingTheCode(message) {
  const word = message.split('');

  const arr = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "a") {
      arr.push(word[1]);
    }
    if (word[i] === "b") {
      arr.push(word[2]);
    }
    if (word[i] === "c") {
      arr.push(word[3]);
    }
    if (word[i] === "d") {
      arr.push(word[4]);
    }
    else arr.push(" ");

  }
  return arr.join("");
}
}
console.log(crackingTheCode('craft block argon meter bells brown croon droop'));


function daysInMonth(month, leapyear) {

  switch (month) {

  case 'January':
    return 'January has 31 days';

  case 'February':
    if(!leapyear) {
      return 'February has 28 days';
    } else {
      return 'Fenruary has 29 days during a leap year';
    }

  case 'March':
    return 'March has 31 days';

  case 'April':
    return 'April has 30 days';

  case 'May':
    return 'May has 31 days';

  case  'June':
    return 'June has 30 days';

  case  'July':
    return 'July has 31 days';

  case 'August':
    return 'August has 31 days';

  case 'September':
    return 'September has 30 days';

  case 'October':
    return 'October has 31 days';

  case 'November':
    return 'November has 30 days';

  case 'December':
    return 'December has 31 days';

  default:
    throw new Error('Must provide a valid month');
  }
}

try {
  console.log(daysInMonth('February'));
} catch(e) {
  console.error(e.message);
}

//Rock Paper Sissors function
var input = prompt("enter either 1 for rock,2 for paper,3 for scissors to play")
function RockPaperSissors(input) {
  let computerChoice = Math.floor(Math.random()*3)+1;
  if (input < 1 || input >3){
    throw ErrorEvent('please pick 1,or 2, or 3');
  }
  else if (input === computerChoice){
    console.log("its a tie")
  }
  else if (input === 1 && computerChoice === 2){
    console.log ("computer wins")
  }
  else console.log ("player wins");
  else if (input === 2 && computerChoice === 3){
    console.log ("computer wins");
  }
    else {console.log ("player wins";)
  }
  else if (input === 3 && computerChoice === 1){
    console.log("computer wins");

  }
  else console.log("you win");

}