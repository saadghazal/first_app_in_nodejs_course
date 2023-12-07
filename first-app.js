// Destructuring in Objects

const person = {
    name: "Max",
    age: 29,
    greet(){
        console.log("Hi, I'm "+this.name)
    }
}


const printName = ({name})=>{
  console.log(name)
}


printName(person);

const {name,age} = person

console.log(name,age)

// Destructuring in Arrays
const hobbies = ['Cars','Football'];
const [hobby1] = hobbies
console.log(hobby1)



// const fs = require("fs");  Stands for File System it's offered by Node.js


// the first argument is the path of the new file
// the second argument is the content of the new file
// fs.writeFileSync('samer.txt','Samer is a Tawjihi Student from');
/*

1- the this keyword in here referese to the whole node js file so it will output Hi, I'm undefined
const person = {
    name: "Max",
    age: 29,
    greet: ()=>{
        console.log("Hi, I'm "+this.name)
    }
}*/

/*
2- the this keyword in here referse to the person object itself so the output will be Hi, I'm Max
const person = {
    name: "Max",
    age: 29,
    greet: function (){
        console.log("Hi, I'm "+this.name)
    }
}*/

/*
// 3- the this keyword in here referse to the person object itself so the output will be Hi, I'm Max
// The Spread Operator
const person = {
    name: "Max",
    age: 29,
    greet(){
        console.log("Hi, I'm "+this.name)
    }
}

const copiedPerson = {...person};

console.log(copiedPerson)
const hobbies = ['Cars','Football'];
const copiedArray = [...hobbies];
console.log(copiedArray)

//Rest Operator

const toArray = (...args)=>{
return args
}

console.log(toArray(3,6,10,0.394683094684309,))
*/
