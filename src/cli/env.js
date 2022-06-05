export const parseEnv = () => {
    console.log(Object.keys(process.env).filter((item) =>{
        return item.indexOf('RSS_') == 0 
    }).map((item) => { 
        return item + '=' + process.env[item] 
    }).join('; '));
};
parseEnv();