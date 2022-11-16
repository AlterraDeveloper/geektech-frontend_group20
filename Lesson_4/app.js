function checkHomework(studentName, homeworkType) {
  if (!studentName) return;
  var hwNumbers = Array.from(arguments).slice(2);
  homeworkType = homeworkType || "zip"; //установка значения по умолчанию
  for (var hwNum of hwNumbers) {
    switch (homeworkType) {
      case "zip":
        console.log("Download zip archive of", studentName);
        console.log("Open VS Code");
        break;
      case "github":
        console.log("Open browser and open github.com", studentName);
        break;
      case "pull-request":
        console.log("Open browser and open github.com", studentName);
        break;
    }
    console.log("check homework #" + hwNum, studentName);
  }
  var isCorrect = false;
  if (isCorrect) {
    console.log("Write grade in google sheets", studentName);
  } else {
    console.log("Write comments for", studentName);
  }
  printDelimiter();
}

function printDelimiter() {
  console.log("-".repeat(50));
}

checkHomework("Vladislav", "zip", 1, 2);
checkHomework("Alina", "github", 2, 3, 4);
// checkHomework("Firdavs", "pull-request");

function validateInn(inn) {
  var firstNumber = Number(inn && inn[0]);
  return !!inn && inn.length === 14 && [0, 1, 2].includes(firstNumber);
}

console.log(validateInn());

function getMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function getMax3(num1, num2, num3) {
  return getMax(num1, num2) > num3 ? getMax(num1, num2) : num3;
}

//функции с переменным числом аргументов
function getMax() {
  var maxNum = arguments[0];
  for (var num of arguments) {
    maxNum = maxNum > num ? maxNum : num;
  }
  return maxNum;
}

// console.log(getMax(1, 5, 4, 2, 3, 8, 4, 4, 8));

var username = "ekiselev         ";

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
  createLogin: function () {
    return this.Name[0].toLowerCase() + this.Surname.toLowerCase();
  },
};

console.log(customer.createLogin().trim());
console.log(customer.PhoneNumbers.join(", "));

function calculateDiscount(price, discount) {
  return price * (discount / 100);
}

//функция с обратным вызовом (callback) -
function getDiscountedPrice(price, makeDiscountFn) {
  return price - makeDiscountFn(price);
}

function getHalfPrice(price) {
  return price / 2;
}

function discountByPromocode(price) {
  return calculateDiscount(price, 15);
}

var price = 5000;
console.log("Price =>", price);
console.log("Black friday price", getDiscountedPrice(price, getHalfPrice));

console.log(
  "Price by promocode",
  getDiscountedPrice(price, discountByPromocode)
);

console.log(
  "Price for VIP client",
  getDiscountedPrice(price, function (price) {
    return price * 0.9;
  })
);

var array = [1, 2, 3, 4, 5];
var fruits = ["banana", "cherry", "melon", "apple", "orange"];

console.log(array.slice(array.length - 3)); // [3,4,5]
console.log(array.slice(0, 3)); // [1,2,3]
console.log(
  array.every(function (value) {
    return value > 5;
  })
);
console.log(
  array.find(function (value) {
    return value % 3 === 0 && value % 5 === 0;
  })
);

var fruits = ["banana", "cherry", "melon", "apple", "orange"];
console.log(
  fruits.find(function (fruit) {
    return fruit.endsWith("a");
  })
);

fruits.unshift("blackberry");

var appleIndex = fruits.findIndex(function (fruit) {
  return fruit.startsWith("a");
});
var deletedFruit = fruits.shift();
console.log("deletedFruit", deletedFruit);
// fruits.splice(appleIndex, 1);
console.log(fruits);
console.log(
  fruits.some(function (fruit) {
    return fruit.startsWith("d");
  })
);

// for (var fruit of fruits) {
//   console.log(fruit);
// }
fruits.forEach((fruit) => {
  console.log(fruit);
});

//map, filter, reduce
