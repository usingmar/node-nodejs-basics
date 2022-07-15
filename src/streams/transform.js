import {Transform} from 'stream'

export const transform = async () => {

    const _transform = new Transform({
        transform(chunk, enc, cb){
            let string = chunk.toString().trim();
            let reversedString = string.split('').reverse().join('');
            
            cb(null, reversedString + '\n');
        }
    });

    process.stdin.pipe(_transform);
    _transform.pipe(process.stdout)
};

transform();