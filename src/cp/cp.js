import  {spawn} from 'child_process'

export const spawnChildProcess = async (args) => {
    const child = spawn('node', args);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['./files\\script.js']);
