// operators
//arthematic(+,-,/,%,++,--,*)


//arthematic operators
 var a=10
 var b=2
 console.log(a/b)
 console.log(a%b)

//  increment
// pre increment
//post increment

console.log(a)
console.log(++a)
console.log(a++)
console.log(a)

// decrement
// per
// post
console.log(a)
console.log(--a)
console.log(a--)

// muitipation(*),(**)exploed
var a=5
var b=10
console.log(a*b)  //multipation
var a=5
var b=3
console.log(a**b)  //exponential 

// assigment operator(=)
//+=,-=(short hand operators)
var a=2
var b=3
console.log(a+b)
var a=2
var b=3
console.log(b)
b=+a
console.log(b)

// comparision operator
//used to compare with 2 values // result will be a boolen value(true/false)
//<,>,<=,>=
// ==(loose equality)
// ===(stricy equality)
// !=(loose inequality)
// !===(stricy inequality)
var a=10
var b=8
console.log(a<b) //false
console.log(a>b) //true
var a=10
var b=8
var c=10
console.log(a<c)  // same value is equal then is called false
var d=10
var e="10"
console.log(d==e) //true
console.log(d===e)  //if used string and it come false
var a=10
var b=10
console.log(a<=b)  //true
var a=10
var b=10
console.log(a>=b)  //true
var d=10
var e="10"
console.log("loose equality",d==e)
console.log("loose inequality",d!=e)
console.log("stricly equality",d===e)
console.log("stricly inequality",d!==e)

//waterid  after age at 18
 var age =18
 console.log(age>18)
 console.log(20>18)


//  logical operators
// and (&&)(if both conditon are true then the result will be true)
// or (||) (if any one of condition is true then the result will be true  )
//not  (!) (if condition is true the result will be false  or if condition is false the result will be true)

//and (&&)
console.log(2<4)&&(8>4)
//or(||)
console.log(2<4)||(2>4)
//not(!)
console.log(!(2<4))

//ternary(?,:)
let salary=5000
salary>=20000 ?
console.log("apply for credit card"):console.log("not elibile for credit cards")

//string operator (contaimation of two string)
var first="jaya"
var last="krishna"
console.log(first+" "+last)
// string type
//template
console.log (`my name is ` +first +last )
//also writing ina simple method
console.log(`my name is ${first} ${last}`)

//bitwise
// 8421
// 000111
//    8421 //position
// 0->0000
// 1->0001
// 2->0010
// 3->0011

// // logical(&&)(if both conditon are true then the result will be true)
// 1&2
// 1->0001
// 2->0010
//    0000---0
console.log(1&2)
/// 1&2
// 1->0001
// 2->0010
//    0011----3
console.log(1|2)





