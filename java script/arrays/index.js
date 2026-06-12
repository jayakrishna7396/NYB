//arrays
//collection of data(collection of data(collection of homegenius or hetrogenius data) //
//to represent an array we use[]


// ["hello",12,true,null,underfined,{name:"krishna"},[1,2,3,4[1,2,3,4]]]
//multi dimensional array//a array which is present in another array

//var let and const

var name="krishna"
var loca='hyd'
var address="fif,miiefmi"

var arr=["1",2,3]
console.log(arr)

//4
//5

//adding an element to an array
//push
//push is to add the elements at the end of the array
arr.push(4)
console.log(arr)

//function
function hi(){
    arr.push(5)
}
hi()
console.log(arr)
arr.push(6)
console.log(arr)
arr.push(7)
console.log(arr)


// unshift
//unshift is used to add the elements at the begining of thr array
arr.unshift(8)
console.log(arr)

//spliceindexvalue,deletecount,new()we can add at any location
arr.splice(2,2,"hello")
console.log(arr)



//how to access  a single iteam in array iteams
//with the help of index values
//it starts from 0 and ends at n-1//n is length of the array
{1,2,3,4}
// referenceofthearray[0] [1] [2] [3] ,n-1

var a=[1,2,3,4]
console.log(a[0])
console.log(a[3])

//remove(to remove the elements)
//pop
arr.pop()
console.log(arr)

//shift(removing the stating value)
arr.shift()
console.log(arr)

//splice
arr.splice(1,1)
console.log(arr)


//console.log(arr.lenghth)
// [0,1,2,3]
 let num=[100,1,2,3,9]
console.log(num.indexOf(0))
console.log(num[2])
console.log(num.indexOf(3))
console.log(num.indexOf(100))

//indexof is used to find the index of a particular element in a array 
//if the value is not present then it will return -1

// // include  true/false
// console.log(num)
// console.log(num[2])
// console.log(num.includes(0))
// console.log(num.includes(1))

//lastindexof
let num1=[100,1,2,3,20,4]
console.log(num1)
console.log(num1.length)

//splice
num1.splice(0,arr.length)
console.log(num1)
num1.splice(0,num1.length)
console.log(num1)


