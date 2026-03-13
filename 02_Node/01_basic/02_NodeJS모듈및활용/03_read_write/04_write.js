const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'example.txt');
const savePath = path.join(__dirname, './txt-1.txt');

// 파일이 있으면
if (fs.existsSync(savePath)) {
  console.log(`파일이 존재합니다. `);
} else {
  // 없을땐 생성
  fs.writeFileSync(savePath, data);
}

// fs.readFile(filePath, 'utf-8', (err, data) => {
//   if (err) {
//     console.err(err);
//   }
// });
// console.log(`작성이 완료되었습니다. `);
