import {createWriteStream} from 'fs'

export const write = async () => {
    const WriteToFileStream = createWriteStream('./files\\fileToWrite.txt');
    process.stdin.pipe(WriteToFileStream);
};

write();