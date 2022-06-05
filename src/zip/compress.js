import {createGzip} from 'zlib'
import { createReadStream, createWriteStream, write } from 'fs';
import { pipeline } from 'stream';

export const compress = async () => {
    const readFileStream = createReadStream('./files\\fileToCompress.txt');
    const writeFileStream = createWriteStream('./files\\archive.gz');

    const compress = createGzip();

    pipeline(
        readFileStream,
        compress,
        writeFileStream,
        (error) => {
            if(error) throw error;
        }
    );
};

compress();