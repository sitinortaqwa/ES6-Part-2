"use strict"

let myimport = require ('./StudentClass.js');

const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

    rl.question('Student name ', (name) => { 
    rl.question('Student Matric Number ', (MatricNo) => {
    rl.question('Student major ', (major) => {  
    
    //let student = new Student(name,MatricNo,major);

    myimport.prototype.display(name,MatricNo,major);  

rl.close();

});
});
});