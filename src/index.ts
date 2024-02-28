export {};

import * as path from 'path';

// 👇️ "/home/borislav/Desktop/typescript"
console.log(__dirname);

// 👇️ "/home/borislav/Desktop/typescript/src/another-file.ts"
console.log(path.join(__dirname, './another-file.ts'));
