var a=10
var ab=20
var name="jayakrishna"
var boolen =true
var k
var n=null
console.log(a)
console.log(ab)
console.log(name)
console.log(boolen)
console.log(k)
console.log(n)


// data types
// primitive data types
// reference data types

// primitve
// string
// Number
// boolen
// undefined
// null
// BigInt
// Symbol

// string
var string="hello good morning"
var k='20'
var m=`20`
console.log(string,typeof(string))
console.log(k,typeof(k))
console.log(m,typeof(m))

// Number
// rules for writing the variable names
// it should start withcharacter(alphabets)
// it should not start with Number
// we can use as(_) before the value
// it should contain white space before 
var _1=10
var a5=25
console.log(_1)
console.log(a5)

// boolen(true/false)
var a =true
console.log(a)
var b=false
console.log(b)

var s="string"
var n=1
var b=true
var u
var k=null
console.log(s,typeof(s))
console.log(n,typeof(n))
console.log(b,typeof(b))
console.log(u,typeof(u))
console.log(k,typeof(k))

// BigInt
var b=10n
console.log(b,typeof(b))


// reference datatype
// object
//array
//function
//E.s-6(map,weakmap,set,weakset)
//Date
// regular Expression

//objects
//object enclosed by{}
//collection of key value pairs
//each key and value will seperated by:
//each key value pair will be seperated by ,

// var obj={name:"jayakrishna",role="head",city="rjy",number:9876567849,male=true}
// console.log(obj)

// Array
// array enclosed by square bases[]
// var arr=[1,2,3,,"hi",true,false,null[1,2,3,4,6764]]
// console.log(arr)

//function
// function is block of code which is use to some task and return value
// function declaration syntax
// function name(){
    
// }

// name();
function place(){
 let a=10
 let b=20
console.log(b)   
}
place()

function hello(){
    console.log("hi,how are you")
}
hello
console.log("hi")


//named function means own name
let text=function hi(){
    let c=20
    let d=5 
    console.log(d+c)
}
text()





//Arrow function es-6 featured
//no function keyword 
//shorter and modern way of writing function introduced in es-6 
const t =() =>{
    console.log("hi")
}

t()
//anonymous function 
//a function without name ,stored in a variable or used directly 
let box=function (){
    let box1="hi"
    let box2="hey"
    console.log(box2)
}
box()