let person= {
    name:'sunil kumar',
    age:23,
    marks:[23,12,34],
    "roll no":112,
    totalMarks:function(){
        return this.marks.reduce((acc,val)=>acc+val,0)
    }
}

//dot method 
// console.log(person.age)
// console.log(person.totalMarks())
// //square method
// console.log(person['name'])

// console.log(person["roll no"])
// console.log(person['totalMarks']())

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// for (const element of person.marks) {
//     console.log(element)
// }
// for (const index in person.marks) {
//     console.log(index)
// }

// for (const key in person) {
//    console.log(key)
// }
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }




