console.log("Hello from app.js");

// я строчный комментарий
/*
Я
многострочный
комментарий
 */

// Camel case

//Data types (Типы данных)
//1) String (текстовый,  строковый)
var customerName = "Evgenii"; // Camel case
var customerSurname = "Kiselev";
var customerLastname = "Dmitrievich";

// var customerName = prompt("Enter your name");
// var customerSurname = prompt("Enter your surname");
// var customerLastname = prompt("Enter your lastname");

//Гражданство
var customerNationality = "KGZ";

//Concatenation - конкатенация
var customerFullName =
  customerSurname + " " + customerName + " " + customerLastname;

//Escaping - экранирование
var creationMessage =
  "Hello, " + " " + customerFullName + ".\n\tYou successfully added to DB.";

console.log(creationMessage);

var customerPassportFilePath = "C:\\CustomerData\\421653421563\\passport.pdf";

console.log(customerPassportFilePath);

//2) Number (Числовой)

var customerBirthDay = 24;
var customerBirthMonth = 3;
var customerBirthDate = customerBirthDay + "." + customerBirthMonth;

var customerCurrentBalance = 5000;
console.log("balance =>", typeof customerCurrentBalance);
customerCurrentBalance = customerCurrentBalance.toString();
console.log("balance =>", typeof customerCurrentBalance);

//Operations: +, -, * , /, %, **

console.log(typeof customerBirthDate, customerBirthDate);

//NaN - Not a Number
//Infinity / -Infinity

//3) Boolean - логический
//true - правда
//false - ложь

//true - Мужской, false - женский
var customerSex = false;
var customerIsResident = customerNationality === "KGZ";

//Opeartions: ==, ===, !=, !==, >, <, <=, >=

var dearMessage;
if (customerSex) {
  dearMessage = "Дорогой";
} else {
  dearMessage = "Дорогая";
}

if (customerBirthMonth === 11) {
  customerBirthDate = customerBirthDay + " november";
} else if (customerBirthMonth === 2) {
  customerBirthDate = customerBirthDay + " february";
} else if (customerBirthMonth === 3) {
  customerBirthDate = customerBirthDay + " march";
} else {
  console.error("Unknown month");
}
var customerBirthMonthAsText;
switch (customerBirthMonth) {
  case 1:
    customerBirthMonthAsText = "january";
    break;
  case 2:
    customerBirthMonthAsText = "february";
    break;
  //TODO: add remain monthes
  default:
    console.error("Unknown month");
}
customerBirthDate = customerBirthDay + " " + customerBirthMonthAsText;
console.log("BirthDate =>", customerBirthDate);

creationMessage =
  dearMessage + " " + customerFullName + ".\n\tYou successfully added to DB.";
console.log(creationMessage);
//4)
//5)
//6)

// var num = prompt("Enter number 1-10");
// console.log("Prompt type,", typeof num);