import {open, write, close} from 'fs'

export const create = async () => {
    const ds = open('files\\fresh.txt','wx',(err,fd)=>{
        if(err) throw "error: FS operation failed";       
        write(fd,  "I am fresh and young", (err) => {
            close(ds, (err) => {
                if(err) throw err;
            });
            if(err) throw err;
        })
    });
};

create();