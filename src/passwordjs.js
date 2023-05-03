'use strict'
const {readFile, hash} = require('./utility');

function passwordjs() {
    if (process.argv.length != 5) return 'false';

    var encodedData = readFile(process.argv[2]);
    var email = process.argv[3]
    var password = process.argv[4]
pup
    let match;

    encodedData.forEach((line, index) => {
        if (line.includes(email)) {
            match = encodedData[index];
        }
    });

    if (match !== undefined || null) {
        return hash(password) === match.split(':')[1];
    }

    return false;

}

if (require.main === module) {
    console.log(passwordjs()) // print out true or false
}

module.exports = { passwordjs };