
const os = require('os');
const interfaces = os.networkInterfaces();

const networkInfo = () => {
    for (let i in interfaces) {
        console.log(`Interface: ${i}`);
        for (let key in interfaces){
            console.log(`Family: ${interfaces[key][0].family}`);
            console.log(`adress: ${interfaces[key][0].address}`);
            console.log(`Internal: ${interfaces[key][0].internal}`);
        }
    }
};

networkInfo()
module.exports = networkInfo()