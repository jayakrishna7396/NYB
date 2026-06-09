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
function add(a,b){
    console.log(a+b)
}
console.log (add(1,2))   //undefined is getting undefined is coming because 
//
function add(a,b){
    console.log(a+b)
    return a+b
}
console.log(add(1,2))
//
function add(a,b){
    console.log(a+b)
    return"hello"
}
let result=add(1,2)
console.log(result)


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
//redeclion
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