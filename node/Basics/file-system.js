//synchronous () and asynchronous (background)

// let x =23
// setTimeout(()=>console.log('hello'),10)
// console.log(x)
// console.log('end of file')

//callback based -
// synchronous - asynchronous ( cb  &  promise based )
import fs from 'node:fs'
import fsPromise from 'node:fs/promises'
//read  a file 
// let data = fs.readFileSync('sample.txt','utf-8')
// console.log(data)
// // cb based 
// fs.readFile('sample.txt','utf-8',(err,data)=>{
//     if(err) return console.log(err)
//     console.log(data)
// })
// fsPromise.readFile('sample.txt','utf-8')
// .then(data=>console.log(data))
//write a file
// fs.writeFileSync('sample1.txt','this is the new file')

// fsPromise.writeFile('sample.txt','this will over ride current text')
// .then(data=>console.log(data))
// .catch(err=> console.log(err))
//append a file
// fs.appendFileSync('sample.txt','\n new appended text ')

fsPromise.appendFile('sample.txt','\n xfkdjfkdjf')
.then(data=>console.log('file appended'))
.catch(err=>console.log(err))





