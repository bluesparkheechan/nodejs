//todo.js
import { jsonString } from "./data.js";
let jsonObject = JSON.parse(jsonString);

console.table(jsonObject);

//reduce 출력 : Female -> id, fullName, email, salary -> resultAry

let resultAry = jsonObject.reduce((acc, elements) => {
  let obj = {};
  if (elements.gender === "Female") {
    obj.id = elements.id;
    obj.fullName = elements.first_name + " " + elements.last_name;
    obj.email = elements.email;
    obj.salary = elements.salary;
    acc.push(obj);
  }
  return acc;
}, []);
console.table(resultAry);

// let evenAry = resultAry.fullName.array.reduce((acc2, elements2) => {
//   let obj2 = {};
//   if (resultAry.gender == "Male") {
//     obj2.first_name = elements2.first_name;
//     acc.push(obj2);
//   }

//   return acc2;
// }, []);
// console.log(evenAry);

resultAry = jsonObject.reduce((acc, elem) => {
  const key = elem["gender"]; // 'male', 'female', 'genderqueer', 'agneder'
  if (!acc[key]) {
    acc[key] = []; // {Male: [], Female: [], Genderqueer: []}
  }
  acc[key].push(elem.first_name);
  return acc;
}, {});
console.table(resultAry);
