const fs = require('fs'); // fs 모듈 가져오기

// 동기방식
let files = fs.readdirSync('./'); // 현재위치 기준 조회
console.log(files);

// 콜백방식
fs.readdir('./', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(files);
});
console.log(files);

// Promise 방식. 이 방식을 많이 씀
fs.promises
  .readdir('./')
  .then((files) => {
    console.log(files);
  })
  .catch((err) => {
    console.error(err);
  });
