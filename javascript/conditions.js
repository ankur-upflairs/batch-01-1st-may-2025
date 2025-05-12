//if-else => execute a block of code based on certain conditions
// https://www.npmjs.com/package/prompt-sync
var prompt = require('prompt-sync')();
// let a = 6
// let b = 7
// if(a>b){
//     console.log('bigger than 7')
// }
// else{
//     console.log('smaller than 7')
// }

// var age = prompt('enter your name? ... ')
// console.log(age)
//postive or negative or zero
var n = prompt('enter a no.')
//nested-if-else
// if(n>=0){
//     if(n>0) console.log('positive')
//     else console.log('zero')
// }
// else{
//     console.log('negetive')
// }
// if-else ladder
// if(n>0) console.log('positive')
// else if(n==0) console.log('zero')
// else console.log('negetive')

n=parseInt(n)
if(n>=0 && n<50) console.log('failed')
else if(n>=50 && n<75) console.log('grade c')
else if(n>=75 && n<90) console.log('grade b')
else if(n>=90 && n<=100) console.log('grade a')
else console.log('score is not valid')








