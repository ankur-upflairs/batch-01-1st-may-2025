import React ,{useState , useEffect} from "react";
import Navbar from "../components/Navbar";
import { formatDate } from "./Home";
import axios from "axios";
import { Link } from "react-router";


function ViewTask() {
  const [tasks, setTasks] = useState([]);
  let getTasks = async () => {
    let res = await axios.get("http://localhost:3000/task");
    // console.log(res.data)
    setTasks(res.data.tasks);
  };
  useEffect(() => {
    getTasks();
  }, []);

  let deleteTask =async (id)=>{
    await axios.delete(`http://localhost:3000/task/${id}`)
    getTasks()
  }
  return (
    <div>
      <Navbar />
      <main>
        <h2>Task List</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => {
              return (
                <tr>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{formatDate(task.dueDate)}</td>
                  <td>
                    <Link to={`/update/${task._id}`}>Edit </Link>
                    <button className="btn" onClick={()=>{deleteTask(task._id)}}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

            {/* <tr>
          <td>Submit Project Report</td>
          <td>Finalize and email the project report.</td>
          <td>2025-05-07</td>
          <td>
            <a href="update.html">Edit</a> |
            <a href="#" onclick="deleteTask(this)">Delete</a>
          </td>
        </tr>
        <tr>
          <td>Buy Groceries</td>
          <td>Milk, bread, eggs, and vegetables.</td>
          <td>2025-05-08</td>
          <td>
            <a href="update.html">Edit</a> |
            <a href="#" onclick="deleteTask(this)">Delete</a>
          </td>
        </tr>
        <tr>
          <td>Client Meeting</td>
          <td>Zoom meeting to discuss project updates.</td>
          <td>2025-05-09</td>
          <td>
            <a href="update.html">Edit</a> |
            <a href="#" onclick="deleteTask(this)">Delete</a>
          </td>
        </tr>
        <tr>
          <td>Pay Electricity Bill</td>
          <td>Due this week to avoid late charges.</td>
          <td>2025-05-11</td>
          <td>
            <a href="update.html">Edit</a> |
            <a href="#" onclick="deleteTask(this)">Delete</a>
          </td>
        </tr> */}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default ViewTask;
