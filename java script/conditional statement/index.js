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

var k    //undefined
console.log(k)
var k=null
console.log (k)    //if give the value is defined as null null is used for future purpose

// NaN(not a number) mathimatics operation is used for nan
if(0){                    //false value
    console.log("zero is true")
}
else{
    console.log("false value")
}
var m="0"                // true beacuse we use string
if(m){
    console.log("zero is true value")
}
else{
    console.log("false value")
}

//switch    //multiple condition then use switch 
// step value  1-10,11-20,21-30,31-40,41-50(if else if else)
//exact value  1,10,15 excute value then i use switch
// syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// switch(valuetocheck){
//     case value:
//         ----------
//         ----------
//         ----------
//         case value:2
//         -----------
//         ----------
//         ----------
//         case value3:
//             -----------
//             -----------
//             -----------
//             default:

// }


var grade =9
switch(grade){
    case 10:
        console.log("excellent")
        case 9:
            console.log("good")
            break;
            case 8:
                console.log("average")
}
              
// ternary operator
// condition is true:false value
