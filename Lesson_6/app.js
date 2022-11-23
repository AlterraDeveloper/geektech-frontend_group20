// ECMAScript 5 ES 5
// ECMAScript 6+ ES 6+

//Syntax sugar - Синтаксический сахар

//let, const
var a;
console.log(a);
// console.log(b);
// console.log(c);
a = 5; //Hoisting - поднятие, всплытие

let b = 5;
const c = 5;
//c++; // c = c + 1

fn();
function fn() {
  var fnValue = 123;
  console.log("i'm function");
}
// console.log(fnValue);
//scopes -  области видимости
if (true) {
  var a = 6;
  let b = 6;
  b = b + 1;
}

console.log("a =", a);
console.log("b =", b);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

const me = {
  name: "Evgenii",
};
me.name = "Artem";

//arrow functions - стрелочные функции

// function getRandomInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

const getRandomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

//default params in functions - параметры по умолчанию
const sep = () => ";";
// function sep(){
//     return ";"
// }

function myJoin(array, separator = sep()) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    result += element + (i === array.length - 1 ? "" : separator);
  }
  return result;
}

console.log(myJoin([1, 2, 3]));

//template strings - шаблонные строки
var customer = {
  Surname: "Kiselev",
  Name: "Evgenii",
  Sex: true,
  INN: "20101199000789",
  IsResident: true,
  HomeAddress: null,
  PhoneNumber: undefined,
  Account: {
    AccountNo: "1561698198191",
    Balance: 0,
    Currency: "USD",
  },
  PassportIssueDate: "",
  Passport: {
    IssueDate: "05-01-2012",
    ExpiryDate: "05-01-2022",
    Issuer: "MKK 09-25",
  },
  PhoneNumbers: ["+996555112233", "+996700112233", "+996777112233"],
  "add-info": {
    val1: 1,
    val2: 2,
  },
  createLogin: function () {
    return this.Name[0].toLowerCase() + this.Surname.toLowerCase();
  },
};

var customerFullName = `${customer.Surname} ${customer.Name}.\nYour account balance is ${customer.Account.Balance} ${customer.Account.Currency}`;
//customerSurname + " " + customerName + " " + customerLastname;
console.log(customerFullName);
//rest spread operators - оператор деструктуризации

//rest operator
function getMean(...numbers) {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum / numbers.length;
}

function requestToBackend(url, ...headers) {
  //   var url = arguments[0];
  //   var headers = Array.from(arguments).slice(1);
}

//null-coalescing operator - оператор исключения null
//classes and modules - классы и модули
