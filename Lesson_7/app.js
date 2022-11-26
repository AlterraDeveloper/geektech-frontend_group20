//rest spread operators - оператор деструктуризации

const numbers = [1, 2, 3, 4, 5];
// const numbers2 = Array.of(1, 2, 3, 4, 5);

// console.log(numbers);
// console.log(numbers2)



const users = [
  new User("qwerty", "123"),
  new User("qazwsx", "987"),
  new User("qwe1234asd", "147"),
  new User("qwe1234asd", "9999"),
];

//внутреннее устройство массива
// const users = {
//     0: new User("qwerty", "123"),
//     1: new User("qazwsx", "987"),
//     2: new User("qwe1234asd", "147"),
//   };

const inputLogin = "wqeqwrf";
const inputPass = "73284";

if (
  users.find((user) => user.Login === inputLogin && user.Password === inputPass)
) {
  console.log("Auth success");
} else {
  console.warn("Auth error");
}
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

for (const prop in customer) {
  console.log(`${prop} => ${customer[prop]}`);
}
for (const prop in users) {
  console.log(prop);
}

// const firstUser = users[0];
// const secondUser = users[1];

const [firstUser, , , thirdUser] = [...users]; //User, User, User
console.log("1 =>", firstUser);
console.log("4 =>", thirdUser);

console.log("Max number =>", Math.max(...numbers));
//console.log("Max number =>", Math.max(numbers[0], numbers[1], ...)); //вот так в ES 5
// Math.max([1,2,3,4,5]) => Math.max(1,2,3,4,5)

function extractFullName({ Surname: surname, Name: name }) {
  return `${surname} ${name}`;
}
console.log(extractFullName(customer));

//null-coalescing operator - оператор исключения null

function calculateDiscount(price, discount) {
  price = price || 0;
  discount = discount ?? 0;
  return price - price * (discount / 100);
}

console.log(calculateDiscount());

const getCustomerFromBackend = () => null;
const customerFromDb = getCustomerFromBackend() ?? {};
const ver = {};
// {
//   RiskLevel: "high",
//   VerDate: "26.11.2022",
// };
customerFromDb.Verification ??= {
  RiskLevel: "High",
  VerDate: "26.11.2022",
};

console.log(
  "Customer risk level is =>",
  customerFromDb?.Verification?.RiskLevel ?? "low"
);

//classes and modules - классы и модули


