import fs from 'fs'

export const copy = async () => { 
    fs.readdir('./files', (err, files) => {
        if(err) throw 'Error: FS operation failed';
        fs.mkdir('./files_copy', {recursive: true}, (err, path) => {
            if(err) throw 'Error: FS operation failed';
            files.forEach((file) => {
                fs.copyFile('./files\\' + file, path + '\\' + file, (error) => {
                    if(error) throw error;
                });
        })
        })
       });
};

copy();

