//Array.prototype.reduce();
//reduce(function(){ . . . })

//이전 순번에서 반환되어지는 결과값이 다음 순번의 누산값이 됨

//1,3,5번 째 위치값
import { stdAry } from "./data.js";
const evenAry = function (acc, elem, idx, ary) {
  //
  console.log(`acc:${acc}, elem:${elem}`);
  if (idx % 2 == 0) {
    acc.push(elem);
  }
  return acc;
};
//누적합
const sumAry = (acc, elem) => {
  return acc + elem;
};
let result = [1, 2, 3, 4, 5] //
  .reduce(evenAry, []);
console.log(`결과: ${result}`);
console.clear();

console.log(stdAry);

result = [23, 11, 56, 33, 47].reduce(function (acc, elem, idx) {
  console.log(idx, acc, elem);
  return acc < elem ? acc : elem; // acc, elem 중 큰 값 반환
}, 23);
console.log(`최소값: ${result}`);

//60점 이상 패스한 사람만 배열에 저장
result = stdAry.reduce(function (acc, elem) {
  console.log(acc, elem);
  if (elem.score >= 60) {
    acc.push(elem);
  }
  return acc;
}, []);
console.table(result);

const numAry = [12, 23, 45, 87, 12, 45];
result = numAry.reduce(function (acc, elem) {
  let exists = acc.reduce(function (acc2, elem2) {
    return acc2 || elem2 == elem;
  }, false);
  //중복된 값을 제거
  if (!exists) {
    acc.push(elem);
  }
  return acc;
}, []);
console.log(result);

console.log(result);
console.table(result);
