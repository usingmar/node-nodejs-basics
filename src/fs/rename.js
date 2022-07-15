import fs from 'fs'

export const rename = async () => {
    fs.readdir('./files', (err, files)=>{
        if(err) throw err;
        if(files.includes('properFilename.md')) throw 'Error: FS operation failed';

        fs.rename('files\\wrongFilename.txt', 'files\\properFilename.md', (err)=>{
            if(err) throw 'Error: FS operation failed';//if wrongFilename.txt doesn't exists
        })
    })
};
rename();