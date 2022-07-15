import crypto from 'crypto'
import fs from 'fs'

export const calculateHash = async () => {
    fs.readFile('files\\fileToCalculateHashFor.txt', 'utf8', (err, data) => {
        if(err) throw 'Error: FS operation failed';
        else console.log(crypto.createHash('sha256').update(data).digest('hex')); //make hash and represent as hex
    });
};

calculateHash();