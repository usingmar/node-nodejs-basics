export const parseArgs = () => {
     console.log(process.argv.slice(2).filter((item) => {
        return item.indexOf('--') == 0 ? true : false;  //find elements with -- prefix
    }).map((item,index) => {
        return item.slice(2) + ' is ' + process.argv.slice(2)[index*2 + 1]; //remove prefix and making items good looking to print into console
    }).join(', '));
}; 
parseArgs();