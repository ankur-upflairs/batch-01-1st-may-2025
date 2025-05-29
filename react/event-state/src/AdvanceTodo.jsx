import React, { useState } from 'react';

const initialState=[
    { id: 1, task: 'to wake up', isCompleted: false },
    { id: 2, task: 'buy bananas', isCompleted: true },
  ]
  //[...task,{id,task,iscompleted}]
function AdvancedTodo() {
  const [tasks, setTasks] = useState(initialState);
  const [edit,setEdit] = useState(null)
  const [newTask, setNewTask] = useState('');
  const [text,setText]= useState('')

  const addTask = () => {
    let newId;
    if(tasks.length == 0){
        newId=1;
    }
    else if(tasks.length > 0){
        newId=tasks[tasks.length -1].id+1
    }
    setTasks([...tasks,{
        id:newId,isCompleted:false,task:newTask
    }])
    setNewTask('')
  };

  const toggleTask = (id) => {
    let newList=[...tasks]
    let index=newList.findIndex(v=>v.id == id)
    newList[index].isCompleted = !newList[index].isCompleted
    setTasks(newList)
    // setTasks(prev =>
    //   prev.map(t =>
    //     t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    //   )
    // );
  };

  const deleteTask = (id) => {
        if(edit ==id) return setEdit(null)

    setTasks(tasks.filter(v=>v.id!=id))
    // setTasks(prev => prev.filter(t => t.id !== id));
  };
  const handleEdit=(id)=>{
    let index=tasks.findIndex(v=>v.id == id)
    setText(tasks[index].task)
    setEdit(id)
  }
  const handleSave = (id)=>{
    let index=tasks.findIndex(v=>v.id == id)
    setTasks(tasks.map((v,i)=>{
        return index == i ? {...v,task:text} : v 
    }))
    setEdit(null)

  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>To-Do List</h2>

      <div style={styles.inputRow}>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add a task..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>Add</button>
      </div>

      <ul style={styles.list}>
        {tasks.map(({ id, task, isCompleted }) => (
          <li key={id} style={styles.listItem}>
           {edit== id ? <input type='text'
           onChange={(e)=>setText(e.target.value)} value={text} /> : <span
              onClick={() => toggleTask(id)}
              style={{
                ...styles.taskText,
                textDecoration: isCompleted ? 'line-through' : 'none',
                color: isCompleted ? 'gray' : 'black',
              }}
            >
              {task}
            </span>}
            <span>
           {edit==id ? <button onClick={()=>handleSave(id)}>save</button>:
            <button onClick={()=>handleEdit(id)}>edit</button>}
            <button onClick={()=>deleteTask(id)}  style={styles.deleteBtn}>✕</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    marginBottom: '16px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  inputRow: {
    display: 'flex',
    marginBottom: '12px',
  },
  input: {
    flex: 1,
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    marginLeft: '8px',
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 0',
    borderBottom: '1px solid #eee',
  },
  taskText: {
    flex: 1,
    cursor: 'pointer',
  },
  deleteBtn: {
    marginLeft: '10px',
    backgroundColor: 'transparent',
    color: 'red',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default AdvancedTodo;
