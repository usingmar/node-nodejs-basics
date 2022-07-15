import fs from 'fs'

export const remove = async () => {
    fs.rm('./files\\fileToRemove.txt', (err) => {
        if(err) throw 'Error: FS operation failed';
    })
};

remove();