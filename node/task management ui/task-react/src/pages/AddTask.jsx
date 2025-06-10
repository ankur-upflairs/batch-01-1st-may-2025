import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function AddTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.title || !task.description || !task.dueDate) {
      alert("fields cannot be empty");
      return;
    }
    await axios.post("http://localhost:3000/task", task);
    setTask({
      title: "",
      description: "",
      dueDate: "",
    });
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

export default AddTask;
