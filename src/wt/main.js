import {workerData, Worker} from 'worker_threads'

export const performCalculations = async () => {
    let resultArray = [];
    let count = process.env.NUMBER_OF_PROCESSORS;
    for(let i = 0; i < process.env.NUMBER_OF_PROCESSORS; i++){
        let newWorker = new Worker('./worker.js', {workerData: 10 + i}); 

        newWorker.on('message', msg => {
            resultArray.push(msg);
            if(count === 1) return(resultArray.sort((item1, item2) => {
                if(item1['data'] === null ) return true;
                if(item2['data'] === null) return false;
                return item1.data - item2.data;
            }));
        });

        newWorker.on('error', error => {
            resultArray.push({ status: 'error', data : null});
        });

        newWorker.on('exit', () => {
            if(count === 1) return resultArray;
            count--;
        });
    };

}; 

performCalculations();



