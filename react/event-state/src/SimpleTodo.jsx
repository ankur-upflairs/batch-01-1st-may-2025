import React, { useState } from 'react';


function ToDoList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState(''); 
  const [edit,setEdit] = useState(null)
//   console.log(tasks) 
    const addTask=()=>{        
        setTasks([...tasks,newTask])
        setNewTask('')
    }
    const deleteTask=(index)=>{
        if(edit ==index) return setEdit(null)
        let filteredTodo=tasks.filter((el,i)=>{
            return index != i
        })
        setTasks(filteredTodo)
    }
    const handleEdit=(i)=>{
        setEdit(i)
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
        {tasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
          {edit==index ? <input type='text' /> :  <span>{task}</span>}
            <span>
           {edit==index ? <button>save</button>:
            <button onClick={()=>handleEdit(index)}>edit</button>}
            <button onClick={()=>deleteTask(index)}  style={styles.deleteBtn}>✕</button>
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
    padding: '6px 0',
    borderBottom: '1px solid #eee',
  },
  deleteBtn: {
    backgroundColor: 'transparent',
    color: 'red',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ToDoList;
