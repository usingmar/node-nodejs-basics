import { fileURLToPath } from 'url';
import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js' ;

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const  unknownObject1 = require('./files/a.json');
const  unknownObject2 = require('./files/b.json');

const random = Math.random();
let unknownObject = {};

if (random > 0.5) {
    unknownObject = unknownObject1;
} else {
    unknownObject = unknownObject2;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

