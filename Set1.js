'use strict';

function getYearOfBirth(age) {

  return 2018 - age;
}

function createGreeting(name, age) {
  if(name.length < 1 || typeof name !== 'string') {
    throw new Error('Name can not be empty or not a string');
  }
  if (age < 0 || isNaN(age) ) {
    throw new Error('Age can not be negative or not a number');
  }
  return (`Hi my name is ${name} and I'm ${age} years old. I was born in ${getYearOfBirth(age)}`);
}

try {


  const greeting1 = createGreeting('John' , 30);
  console.log(greeting1);
} catch(e) {
  console.error(e.message);
}