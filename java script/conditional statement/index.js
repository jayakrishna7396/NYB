// conditional statements
// types
// 1.if
// 2.if else
// 3.else if else
// 4.switch
//ternary (?:)  

//if
//syntax
// if(condition){

// }

function checkelgibility(age){
    if(age>18){
    console.log("eligible for vote")
    }     
}
let age=19
checkelgibility(age)

if(true){
    console.log("truthy values")
}

if(0){
    console.log("truthy value")
}

if(1){
    console.log("truthy value")
}

//ifelse
// if(condition){

// }
// else{
// }

if(true){
    console.log("true")
}
else{           //if in case the condition is true it doesnot print false by using else without else{} the false also print that is used of else
console.log("false")
}
console.log("hi")  //general statement

let a=10
if(a>0){
    console.log("positive number")
}
// let a=10
// if(a>0 && a%2){
//     console.log("positive number & even number")

// }

// example:-school grades
//90-100  10
//80-90   9
//70-80   8
let  marks=89
if (marks>90){
    console.log("A grade")
}
else if(marks>80){
    console.log("B grade")
}


