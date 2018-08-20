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
  const wordsArr = message.split(' ');
  const decodedWord =[];
  for (const item in wordsArr) {
    const word = wordsArr[item];
    if(word.charAt(0) === 'a') {
      decodedWord.push(word.charAt(1));
    } else if(word.charAt(0) === 'b') {
      decodedWord.push(word.charAt(2));
    } else if(word.charAt(0) === 'c') {
      decodedWord.push(word.charAt(3));
    } else if(word.charAt(0) === 'd') {
      decodedWord.push(word.charAt(4));
    } else {
      decodedWord.push(' ');
    }
  }
  return decodedWord.join('');
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

