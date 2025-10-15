//literal.js
import { getStdInfo } from "./data.js";
let name = "홍길동";
console.log(`Hello, ${name}`);

let n1 = 10;
let n2 = 15;
console.log(`n1 + n2 = ${n1 + n2}`);
console.log(
  `${getStdInfo().map((person) => {
    "친구이름=>" + person + "\n";
  })}`
);

console.log(
  `${getStdInfo()
    .map((person) => "친구이름" + person)
    .join(" ")}`
);

//펼침연산자(spread operator)
let friends = ["고길동", "연길동"];
console.log(...friends);
let newAry = [...friends, ...getStdInfo()];
console.log(newAry);

//object destructuring
const person = {
  firstName: "Gildong",
  lastName: "Hong",
  Age: "20",
};

let { firstName: fn, lastName: ln, Age } = person;

console.log({ fn, ln, Age });
//array destructuring

//"고길동", "홍길동", "신길동", "김길동"
let [ary1, ary2, ...ary3] = getStdInfo();
console.log(ary1, ary2, ary3);

//default function parameter
function minus(n1 = 0, n2 = 0) {
  return n1 - n2;
}
console.log(minus());
