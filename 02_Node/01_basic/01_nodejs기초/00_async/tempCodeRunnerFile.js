// 구조분해할당
// - 배열이나 객체에 들어있는 값을 더 짧고 편하게
// - 원하는 변수에 나누어 담는 문법

// 크게 2가지 : 배열, 객체

// 배열 구조분해할당
const fruits = ['apple', 'banana', 'orange'];
// const [a, b, c, d] = fruits;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const [a, , b] = fruits; // 가운데 빼먹기
// console.log(a);
// console.log(b);

// 객체 구조분해할당
const student = { name: '김학생', age: 20, major: '컴공' };
const { name, age, major } = student;
console.log(name);
console.log(age);
console.log(major);
