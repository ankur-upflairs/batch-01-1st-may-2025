import React from 'react'

function Events() {
    function show(){
        alert('click event occured')
    }
    function greet(name){
        alert(`welcome to our site Mr. ${name}`)
    }
  return (
    <div>
        <button onClick={show}  >click here </button>
        <button onDoubleClick={()=>greet('pawan')}>show msg</button>
    </div>
  )
}

export default Events