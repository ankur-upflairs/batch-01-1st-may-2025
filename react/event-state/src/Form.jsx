import React, { useState } from "react";

//2 input field ->increase and decrease and one state count
//and button for increase and decrease

function Form() {
  const [task, setTask] = useState(false);
//   console.log(task);
    const [gender,setGender] =useState('male')
    console.log(gender)
  return (
    <div>
      react forms:- <br />
      <form>
        <label htmlFor="done">have you completed the task?</label>
        <input
          type="checkbox"
          name="task"
          onChange={(e) => setTask(e.target.checked)}
          id="done"
          value={task}
        />
        <p>gender ?</p>
        <label htmlFor="m">male</label>
        <input type="radio" onChange={(e)=>setGender(e.target.value)} name="gender" id="m" value={'male'} />
        <br />
        <label htmlFor="f">female</label>
        <input type="radio" onChange={(e)=>setGender(e.target.value)} name="gender" id="f" value={'female'} />
        <br />
      </form>
    </div>
  );
}

// function Form() {
//     const [text,setText] = useState('')

//     function handleChange(event){
//         // console.log(event)
//         setText(event.target.value)
//         // console.log(text)
//     }
//   return (
//     <div>
//         react forms:- <br />
//         <input type="text" onChange={handleChange} value={text}/>
//     </div>
//   )
// }

export default Form;
