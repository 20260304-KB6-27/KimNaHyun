// const fs = require('fs').promises;
const fs = require('fs/promises');

// 이미 불러와서 promises 여기서 또 안 불러와도 됨
// fs.readdir('./')
//   .then((files) => {
//     console.log(files);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

async function readDir() {
  try {
    const files = await fs.readdir('./');
    console.log(files);
  } catch (err) {
    console.error(err);
  }
}

readDir();
