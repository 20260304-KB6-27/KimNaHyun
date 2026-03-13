// const path = require('path');
import path from 'path'; // esm 방식

// __filename -> 사용불가
//

/*
path 모듈
- 파일 경로나 디렉토리 경로를 다루는 모듈
- 운영체제간의 경로를 구분하는 구분자가 다른데 -> 통일 가능
 */

import { fileURLToPath } from 'url';
// const dir = fileURLToPath(import.meta.url);
// console.log(dir);

// const fullPath = path.join('some', 'work', 'ex.txt');

// console.log(fullPath);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(`파일 절대 경로 : ${__filename}`);

/*
- 절대경로 : 루트디렉토리 부터 시작하는 경로
- 상대경로 : 현재 작업하고 있는 디렉토리 기준 경로
*/

const dir = path.dirname(__filename);
console.log(`폴더까지만 : ${dir}`);
console.log('----------------------------');

// 현재 작업 디렉토리
console.log(process.cwd());
