//functions
// it is block of some task and return some values
// function hello(){  //parameters

// }
// hello   //function calling
//value that can be passed at the time of function calling are called as arguments

function add(a,b){   //parameters
    console.log(a+b)
}
add(1,2)          //only console is didnt  is get 3 return     //arugument
//
// function add(a,b){
//     console.log(a+b)
// }
// console.log (add(1,2))   //undefined is getting undefined is coming because 
// //
// function add(a,b){
//     console.log(a+b)
//     return a+b
// }
// console.log(add(1,2))
//
// function add(a,b){
//     console.log(a+b)
//     return"hello"
// }
// let result=add(1,2)
// console.log(result)


//email
//mobile verfication
//to change password
//to change mobile number
//to change email

//function declartion
// function otp(){

// }

// 
//function defined
//function declartion
//function expression
  
//function declartion  --syntax
//function functionname(){

// }
// functionname()

// function expression---named function//anonymous//arrow function

// argument/parameters
function hello(){     //parameters

}
hello(1,2)            //aruguments

//default parameters 
//argument will have high priorty then parameters
function hello(a=0,b=2){       //value is given in parameters then it called default parameters
    console.log(a,b)
}
hello(1,undefined) 


//varying in number of parameter and aruguments
function varying(a,b,c,d){
    console.log(a,b,c,d)
}
varying(1,2,3)

function varying(a=10,b,c,d){
    console.log(a,b,c,d)
}
varying (undefined,2,3)

//rest parameters and argument objects
function varying(a=10,b,c,d){
    console.log (a,b,c,d)
    console.log(arguments)
}
//rest parameter and aruguments objects
varying(undefined,2,3,4,5,6,7,8,9,10)



//function decleration
function functionname(){

}
functionname()
//function expession
//3ways
//named function
//anomonous function
//arrow function

//named
let a=function functionname(){

    return
}
a()                    //calling

//anomonous         difference between named and anomonous in named function there will be named in anomous is there is no name   
let b=function(){ 

    return
}

// arrow        ll in arrow function there key and name is not there in arrow only arrow symbol(=>)es.6
let c=()=> a+b


                  //var      //let       //const
 //redeclare       yes       no             no       (redeclaring the same variable)
 //reassigment       yes       yes            no
 //hoisting         yes        no             no


var m=10
console.log(m)

//undefined
//a variable is declared but no value is assigned
//it has the value undefined
//program continues normally
//ex;-let x;
//  console.log(x)

//not defined
//a variable is used without being declared
//it causes a referenceerror
//program stops with an error
//  console.log(y)

//var
var age=10
console.log (age)

var age=30
console.log(age)

//let

let k=10
console.log(k)

// let k=20     //Identifier 'k' has already

// const
// const 1=10
// console.log(1)

// const 1=20     //Identifier 'k' has already 
// console.log(1)


//scope

var d=10              //result--1,2,10
function hi(a,b){
    console.log(a,b,d)
}
hi(1,2)

// function hi(a,b,d){       //result--1,2,undefined
//     console.log(a,b,d)
// }
// hi(1,2)

// function hi(a,b,c,d){
//     var m=10
//     console.log(m)
//     console.log(a,b,d)
// }
// hi(1,2)
// console.log(m)



//block  //{}inside and out side the block we can used var but let inside the block we can use otside the block cannot use
// {
//     var J=10
//     let K=20
//     const za=30
//     console.log(za)
//     console.log(K)
//     console.log(J)
// }
// console.log(J)
// console.log(K)
// console.log(za)

//variables is decleared in outside function
//variables is declared inside the function
//let and const are block scoope

//function var,let,const
//var---this can be accesed out the fumction
// let,const---cannot be accesed

//block--var,let and const
//var---can be accesed outside the block
//let,const---cannot be accesed out side the block


//recursive function
let sum=0
let one=function rec(a){
    if(a==0){
        return  0
    }
    // sum+=a
    return a+rec(a-1)
}
// return(10 +9+ 8+)
//a=10 sum=10--->sum=10 a=9 sum=19....a=1 0 -1 -2 -3
//sum of first 10 natural number
console.log(one(9))
console.log(one(10))

//iife(immediately invoked function expression)



// function functionname(a,b,c,d){

// }
// functionname(10,20,30)

// function functionname(a){

//     function(){
//         function(){
//             function(){

//             }
//         }
//     }
// }
// functionname(10,20,30,40)

function add(a){
    return function(b){
        console.log((b/100)*100)
        return "done"
    }
}    



//first class function

var greet=function(){
    console.log("hello")
}
greet()

//pure function
function add(a,b){
    return a + b;
}
console.log(add(2,3))   //5


//impure function
let count =0
function increment(){
    count++
    return count
}

//higher order function

//this key word
//console.log(obj){"name"}
//change of this reference 
//call apply and blind
// console.log(this)

function hello(a,b){
    console.log(this)


    console.log(a,b)
}    
hello.call(obj,10,20)     //function calling

//apply
hello.apply(obj(1,2,3))
