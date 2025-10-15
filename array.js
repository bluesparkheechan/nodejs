// array.prototype.sort();
"abc".split("").sort();
//['a','b','c'].sort();
let fruits = ["banana", "appale", "mango"];

console.log(fruits.sort());

let points = [2, 14, 10, 100, 1];
points.sort(function (a, b) {
  //오름차순 : -값을 반환
  //내림차순 : =값을 반환
  console.log(a, b);
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(points);

const students = [];
students.push({ sno: 100, sname: "홍길동", score: 10 });
students.push({ sno: 200, sname: "홍길순", score: 30 });
students.push({ sno: 300, sname: "고길동", score: 50 });

students.sort(function (a, b) {
  if (a.score < b.score) {
    return -1;
  } else {
    return 1;
  }
});
console.log(students);

//filter()
let result = students.filter(function (element, idx, ary) {
  if (element.score < 40) {
    return true;
  }
});
console.log(result);

//map(function)=> 매핑(A->A') 학생번호 + 이름+점수 => 학생번호+이름+통과
result = students.map(function ({ sno, sname, score }) {
  const obj = {};
  obj.no = sno;
  obj.name = sname;
  obj.score = score <= 40 ? "F " : "P";
  return obj;
});
console.log(result);
