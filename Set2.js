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
