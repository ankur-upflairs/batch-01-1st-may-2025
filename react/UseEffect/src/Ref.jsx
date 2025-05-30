import React, { useRef } from 'react'

function Ref() {
   let element = useRef(null)
   function change(){
    element.current.style.color = 'red'
   }
  return (
    <div>
        <p ref={element} >hello every one</p>
        <button onClick={change}>change color</button>
    </div>
  )
}

// function Ref() {
//     let count = useRef(0)
//     // console.log(count.current)
//     function increase(){
//         count.current+=1;
//         console.log(count.current)
//     }
//   return (
//     <div>
//         <p>{count.current}</p>
//         <button onClick={increase}>increase</button>
//     </div>
//   )
// }

export default Ref