"use strict"

module.exports = class Student{
    constructor(name,matricNo,major){
        this.name = name;
        this.matricNo = matricNo;
        this.major = major;
    }

    get Name(){
        return this.name;
    }
    get Matricno(){
        return this.matricNo;
    }
    get Major(){
        return this.major;
    }

    set Name(name){
        this.name = name;
    }
    set Matricno(matricNo){
        this.matricNo = matricNo;
    }
    set Major(major){
        this.major = major;
    }
    display(name,matricNo,major){
        this.name=name;
        this.matricNo=matricNo;
        this.major=major;

        console.log(`Name ${name} Matric Number ${matricNo} Major ${major}`);
    }
}
