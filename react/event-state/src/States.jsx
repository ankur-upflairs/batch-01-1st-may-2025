import React, { useState } from 'react'

function States() {
    //it's a memory of a component
    //when state changes , comp re-render 
    const [count,setCount]= useState(0)
    // you can't change state directly  (immutable)
    //use setter function to change the state
    //when state changes than it  comp re-render 
    //state preserve the value between re-renders
    let x=0
    function increase(){
        // x+=1
        // console.log(x)
        setCount(count+1)
    }
    function decrease(){
        setCount(count-1)
    }
  return (
    <div>
        <p> <button onClick={increase} >increase</button>{count}- {x}
        <button onClick={decrease}>decrease</button> </p>
    </div>
  )
}

export default States