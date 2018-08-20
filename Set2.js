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
    console.log(word);
    const arr =[];


    if (word[0] === "a"){
        arr.push (word[1]);}
    if( word[0] === "b") {
        arr.push (word[2]);
    }
    if (word[0]=== "c") {
        arr.push (word[3]);
    }
    if (word[0]=== "d"){
        arr.push( word[4]);
    }
    else arr.push (" ");


return arr.join("");

}
crackingTheCode("craft block argon meter bells brown croon droop")


