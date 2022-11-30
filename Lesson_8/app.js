//JSON - JavaScript Object Notation
//alias - псевдоним

import UserEs6 from "./Models/UserClass";
import UserEs5 from "./Models/UserFunc";
import chroma from "chroma-js";
import ancestry from "./Models/Ancestry";

const users = [
  new UserEs5("qwerty", "123"),
  new UserEs6("qazwsx", "987", "Eugene Kiselev"),
];

const [, myUser] = [...users];

console.log(users);

document.body.style.backgroundColor = chroma.random();

console.log(myUser);
myUser.Login = myUser.generateLogin();
console.log(myUser);

//map, filter, reduce

function myForEach(array, callback) {
  for (const item of array) {
    callback(item);
  }
}

function myMap(array, callback) {
  const newArr = [];
  for (const item of array) {
    newArr.push(callback(item));
  }
  return newArr;
}

function myFilter(array, callback) {
  const newArr = [];
  for (const item of array) {
    if (callback(item)) newArr.push(item);
  }
  return newArr;
}

const numbers = [10, 15, 20, 25];
console.log(numbers.map((num) => num ** 2));

console.log(myMap(numbers, (num) => num ** 2));

// myForEach(ancestry, (person) => console.log(person));
// ancestry.forEach((person) => console.log(person));
const female = (person) => person.sex === "f";
const male = (person) => person.sex === "m";

const newAncestry = ancestry
  .map((person) => {
    return {
      Name: person.name,
      Age: person.died - person.born,
      Sex: person.sex,
    };
  })
  .filter(male)
  .filter((person) => person.Age > 80);

const newAncestry2 = myFilter(
  ancestry,
  (person) => person.sex === "m" && person.died - person.born > 80
);

console.log(newAncestry);
console.log(newAncestry2);

console.log(numbers.reduce((sum, num) => (sum += num), 0));

console.log(
  ancestry
    .filter((person) => person.sex === "m")
    .reduce((oldestWoman, woman) => {
      oldestWoman = woman.born < oldestWoman.born ? woman : oldestWoman;
      return oldestWoman;
    }).name
);

const men = ancestry.filter(male).map((person) =>
  Object.create({
    name: person.name,
    age: person.died - person.born,
  })
);

console.log(
  (men.filter((man) => man.age > 90).length / men.length) * 100 + "%"
);

console.log(
  ancestry
    .filter(male)
    .map((woman) => woman.died - woman.born)
    .reduce((longLifeWomanAge, womanAge) =>
      longLifeWomanAge < womanAge ? womanAge : longLifeWomanAge
    )
);
