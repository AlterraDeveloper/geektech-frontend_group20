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
  PhoneNumbers: ["+996555112233", "+996700112233", "+996777112233"],
  "add-info": {
    val1: 1,
    val2: 2,
  },
};

var fruits = ["banana", "cherry", "melon", "apple", "orange"];
//                0        1        2         3         4
var friutForFound = "melon";
var i = 0;
//цикл с предусловием
while (i < 5) {
  if (fruits[i] === friutForFound) console.log("Friut found on index", i);
  i++; // i = i + 1; i+= 1
}

//цикл с постусловием
// var randNum = Math.floor(Math.random() * (9 - 0 + 1));
// do {
//   var num = Number(prompt("Enter number (1-9)"));
// } while (num !== randNum);
// console.log("Success, I guess", randNum);

//бесконечные циклы: while(true){}, for(;;)
for (var i = 1; i <= 12; i++) {
  var month;
  var currentMonth = new Date().getMonth() + 1;
  if (currentMonth === i) continue;
  switch (i) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }
  console.log((i === 1 ? "Year starts with " : "Then ") + month);
}

function FormatPhoneNumber(phoneNumber) {
  var countryCode = phoneNumber.substring(0, 4);
  var operatorCode = phoneNumber.substring(4, 7);
  var phonePart1 = phoneNumber.substring(7, 9);
  var phonePart2 = phoneNumber.substring(9, 11);
  var phonePart3 = phoneNumber.substring(11, 13);
  return (
    countryCode +
    " " +
    operatorCode +
    " " +
    phonePart1 +
    "-" +
    phonePart2 +
    "-" +
    phonePart3
  );
}

//цикл с счетчиком
for (var i = 0; i < customer.PhoneNumbers.length; i++) {
  var phone = customer.PhoneNumbers[i];
  console.log(FormatPhoneNumber(phone));
}

for (var fruit of fruits) {
  console.log(fruit.toUpperCase());
}

for (const phone of customer.PhoneNumbers) {
  console.log(FormatPhoneNumber(phone));
}

function ValidateByLuhn(cardNumber) {
  if (!cardNumber) return;
  var isSecond = false;
  var sum = 0;
  for (var i = cardNumber.length - 1; i >= 0; i--) {
    var cardNum = Number(cardNumber[i]);
    if (isSecond) {
      var doubleNum = (cardNum * 2).toString().padStart(2, "0"); //0 + 5 1 + 8
      sum += Number(doubleNum[0]) + Number(doubleNum[1]);
    } else {
      sum += cardNum;
    }
    isSecond = !isSecond;
  }
  return sum % 10 === 0;
}

console.log(
  ValidateByLuhn("4215890114971853") ? "Card exists" : "Card validation ERROR"
);

console.log(
  ValidateByLuhn(undefined) ? "Card exists" : "Card validation ERROR"
);

//Falsy: false, 0, "", undefined, null, NaN
//Truthy: все что не Falsy))

var array = [4, null, 5, "", "card", NaN, undefined, true, false];

for (var item of array) {
  if (item) console.log(item);
}

//Операторы короткого обновления переменных
// += -= *= /= %= **= ++ -- &&= ||=
var num = 5;
// num += 5; // num = num + 5
// ++num; // num = num + 1; num += 1

console.log("NUM =>", num++);
console.log("NUM =>", num);
