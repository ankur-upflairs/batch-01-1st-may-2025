//fuction declaration
function sum(a,b){
    // console.log(a+b)
    return a+b
}

//function expression
let cube = function (a){
    return a**3
}
//arrow function
let greet = (name)=>{
    console.log(`Hello ${name}`)
}
// greet('pankaj')
// let square=(a)=>{return a**2}
let square=a=>a**2 //in case of single line return
// console.log(square(23))

//fn calling
// let a = sum(5,6)
// console.log(a)
// console.log(sum(11,23))
//make function to calculate cube of a no
//make a function to find average of 4 no.
// console.log(cube(5))

//callback function => a callback function is a fn that has passed as an argument
//to another function and call inside that fn

function multiplyBy3(a){
        return a*3
}
function SumAndMultiply(a,b, func){
        let c=a+b 
        let d = func(c)
        return d
}
// console.log(SumAndMultiply(4,5,multiplyBy3))

// console.log(SumAndMultiply(12,56,x=>x*4))

//make a fn that takes an argument array =>that multiply every element to a no. and 
//calculate sum of array
//[1,2,3] => [4,8,12] =>sum 



