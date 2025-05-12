//variable => it is a container that stores a value.
//it is a name of memory location that stores a value.
//let , var , const => 
//declare variable
let a;
a=45;
//naming rules - 1. cant use reserve keyword
//2. cant start with no.
//3.can contain alphabet, no. , underscore(_), doller$
//data types - 1.Number - (int , float)
var b =34.5
//2.string = can be written in '' or ""
var c= 'xyz'
//3. boolean -> true / false
var d = false
//4. undefined => value not assigned yet
var e;
// console.log(e)
//5.null => value assigned as null
var f= null
// console.log(f)
//6. bigInt => 
var g = 12122324343435454
var i =1233434345454545465n
console.log(typeof g, typeof i)
//7. Symbol-> 
let s1= Symbol('a')
let s2 = Symbol('a')
console.log(s1 == s2)

//refernce / derived data type =>
// object > key - value pair
let person = {
    name:'sunil',
    age:30
}
// console.log(person.name,person.age)
//array => it is type of object
let nums= [23,45,56,'a',true]
// console.log(nums[1])
const aman = nums.splice(1,2)
// const newNums = nums.slice(1,3)
// console.log(newNums)
// console.log(nums)
console.log(aman)



