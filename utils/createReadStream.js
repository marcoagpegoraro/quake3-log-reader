const fs = require('fs');
const readline = require('readline');

exports.createReadStream = (fileName) => {
    const fileStream = fs.createReadStream(fileName);
    
    return readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
}