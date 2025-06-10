import React, { useState ,useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function EditTask() {
    const navigate = useNavigate()
    const {id} = useParams()
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
   let getTask = async () => {
    let res = await axios.get(`http://localhost:3000/task/${id}`);
    // console.log(res.data)
    setTask({...res.data.task,dueDate:formatDate(res.data.task.dueDate)});
  };
  useEffect(() => {
    getTask();
  }, []);
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.title || !task.description || !task.dueDate) {
      alert("fields cannot be empty");
      return;
    }
    await axios.put(`http://localhost:3000/task/${id}`, task);
    navigate('/viewtask')
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          value={task.title}
          type="text"
          name="title"
          placeholder="Enter task title"
          required
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          value={task.description}
          name="description"
          onChange={handleChange}
          placeholder="Task description"
        ></textarea>
        <label>Due Date</label>
        <input
          value={task.dueDate}
          name="dueDate"
          type="date"
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default EditTask;
