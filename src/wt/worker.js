import {parentPort, workerData, Worker} from 'worker_threads'
// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    console.log("Thread: " + workerData);
    parentPort.postMessage({ status: 'resolved', data: nthFibonacci(workerData)});
};

sendResult();