import React, { useState } from 'react'

//2 input field ->increase and decrease and one state count
//and button for increase and decrease 


function Form() {
    const [text,setText] = useState('')

    function handleChange(event){
        // console.log(event)
        setText(event.target.value)
        // console.log(text)    
    }
  return (
    <div>
        react forms:- <br />
        <input type="text" onChange={handleChange} value={text}/>
    </div>
  )
}


export default Form