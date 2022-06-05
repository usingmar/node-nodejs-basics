import fs from 'fs'

export const read = async () => {
     fs.readFile('files\\fileToRead.txt', 'utf8', (err, data) => {
         if(err) throw 'Error: FS operation failed'
         console.log(data);
     })
};

read();