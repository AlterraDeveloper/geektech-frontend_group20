/*
true - мужской
false - женский
*/
var customerSex = true;

var customerIsResident = false;
var customerIsInternetBankingUser = true;
var customerIsMobileBankUser = false;

var loanRequestAmount = 1500000;

// && || ^

if (customerIsResident || loanRequestAmount < 1000000) {
  console.log("Issue loan");
} else {
  console.warn("Loan request reject");
}

// период депозита в месяцах
var depositPeriod = 0;

if (depositPeriod > 0 && depositPeriod <= 24) {
  console.log("Short-term deposit");
} else if (depositPeriod > 24 && depositPeriod <= 60) {
  console.log("Middle-term deposit");
} else if (depositPeriod > 60) {
  console.log("Long-term  deposit");
} else {
  console.warn("Invalid deposit period");
}

var customerLogin = "ekiselev";
var customerPassword = "123qwe";

// var loginInput = prompt("Login:");
// var passwordInput = prompt("Password:");
// if (loginInput === customerLogin && passwordInput === customerPassword) {
//   alert("Welcome " + customerLogin);
// } else {
//   console.error("Auth error");
// }

var customerIdentificationNumber = "12345678912345";
var customerIdentificationNumber2 = "63876e21937";
var customerInnFirstChar = Number(customerIdentificationNumber[0]);
if (
  (customerInnFirstChar === 0 ||
    customerInnFirstChar === 1 ||
    customerInnFirstChar === 2) &&
  customerIdentificationNumber.length === 14
) {
  console.log("INN is valid");
}

var customerCardType = "VISA";

// if (customerCardType === "VISA") {
//   console.log("Get balance from VISA");
// } else if (
//   customerCardType === "MasterCard" ||
//   customerCardType === "Maestro"
// ) {
//   console.log("Get balance from MasterCard");
// } else if (customerCardType === "ELCARD") {
//   console.log("Get balance from ELCARD");
// } else {
//   console.log("Invalid card processing");
// }

switch (customerCardType) {
  case "VISA":
    console.log("Get balance from VISA");
    break;
  case "Maestro":
  case "MasterCard":
    console.log("Get balance from VISA");
    break;
  case "ELCARD":
    console.log("Get balance from ELCARD");
    break;
  default:
    console.log("Invalid card processing");
}

//4) Undefined - неопределенный

var customerBirthDate;

console.log("UNDEF =>", typeof customerBirthDate);
console.log("Length of undef =>", customerIdentificationNumber[14]);

//5) Null - нулевой

customerHomeAddress = null;

//Баг JS
console.log("typeof null =>", typeof customerHomeAddress);

//6) Object - объект (комплексный тип данных)

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
    Balance: 500,
    Currency: "KGS",
  },
  PassportIssueDate: "",
  Passport: {
    IssueDate: "05-01-2012",
    ExpiryDate: "05-01-2022",
    Issuer: "MKK 09-25",
  },
  PhoneNumber: "+996555112233",
  "add-info": {
    val1: 1,
    val2: 2,
  },
};
console.log("typeof customer =>", typeof customer);
console.log("typeof balance =>", typeof customer.Balance);

function ValidateInn(inn) {
  var innFirstChar = Number(inn[0]);
  return (
    (innFirstChar === 0 || innFirstChar === 1 || innFirstChar === 2) &&
    inn.length === 14
  );
}

console.log(ValidateInn("1321564898949"));
console.log(ValidateInn("123"));
//Баг JS
console.log("typeof function =>", typeof ValidateInn);

//6) Symbol
//7) BigInt - числа для длинной арифметики

//Классы (виды) операторов
//1) унарные операторы: ! + -
//2) бинарные операторы + - * / % ** && || ^
//3) тернарный оператор

var sexAsText = "Пол: " + (customerSex ? "Мужской" : "Женский");
// if (customerSex) {
//   sexAsText += "Мужской";
// } else {
//   sexAsText += "Женский";
// }
console.log("Customer sex is =>", sexAsText);
