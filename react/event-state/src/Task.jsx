import React, { useState } from 'react'

function Task() {
    const [value,setValue] =useState(0)
    const [inc,setInc] =useState('')
    const [dec,setDec] =useState('')
    function increase(){
        setValue(value+  parseInt(inc))
        setInc('')
    }
    function decrease(){
        setValue(value -  parseInt(dec))
        setDec('')
    }
  return (
    <div>
        <p>task : - </p>
        <input type="number"  onChange={(e)=>setInc(e.target.value)}
        value={inc} />
        <button onClick={increase}>inc</button><br />
        <input type="number" onChange={(e)=>setDec(e.target.value)} 
        value={dec} />
        <button onClick={decrease}>dec</button>
        <h1>value :- {value}</h1>
    </div>
  )
}

export default Task