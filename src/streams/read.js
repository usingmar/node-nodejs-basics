import {createReadStream} from 'fs'

export const read = async () => {
    const readFromFileStream = createReadStream('./files\\fileToRead.txt');
    readFromFileStream.pipe(process.stdout);
};

read();