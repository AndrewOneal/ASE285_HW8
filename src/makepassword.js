'use strict'
const {readFile, writeFile, hash} = require('./utility');
const path = require('path');

function makePassword(passwordFileName, passwordEncFileName) {
   const fileData = readFile(passwordFileName);
   const encodedFileData = [];

   fileData.forEach(line => {
       let [email, password] = line.split(':');
       let hashedPassword = hash(password);
       encodedFileData.push(`${email}:${hashedPassword}`);
   })

    writeFile(passwordEncFileName, encodedFileData)
}

if (require.main === module) {
    //let unencrypted = path.join('.', 'password.txt');
    //let encrypted = path.join('.', 'password.enc.txt');
    makePassword('password.txt', 'password.enc.txt');
}

module.exports = {makePassword};