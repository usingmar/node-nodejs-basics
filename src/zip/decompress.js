import {createUnzip} from 'zlib'
import { createReadStream, createWriteStream, write } from 'fs';
import { pipeline } from 'stream';

export const decompress = async () => {
    const readFileStream = createReadStream('./files\\archive.gz');
    const writeFileStream = createWriteStream('./files\\fileToCompress.txt');

    const deCompress = createUnzip();

    pipeline(
        readFileStream,
        deCompress,
        writeFileStream,
        (error) => {
            if(error) throw error;
        }
    );
};

decompress();