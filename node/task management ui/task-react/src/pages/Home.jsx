import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export let formatDate = (date)=>{
    let d = new Date(date)
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
}

function Home() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    let getTasks = async () => {
      let res = await axios.get("http://localhost:3000/task");
      // console.log(res.data)
      setTasks(res.data.tasks);
    };
    getTasks();
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <h2>Welcome to Task Manager</h2>
        <p>Manage your tasks efficiently with this simple system.</p>

        <section class="task-section">
          <h3>Recent Tasks</h3>
          {tasks.map((task, i) => {
            let date =formatDate(task.dueDate)
            return (
              <div class="task-card">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <p>
                  <strong>Due:</strong> {date}
                </p>
              </div>
            );
          })}
          {/* <div class="task-card">
        <h4>Buy Groceries</h4>
        <p>Get milk, vegetables, and bread from the market.</p>
        <p><strong>Due:</strong> 2025-05-08</p>
      </div>
      <div class="task-card">
        <h4>Meeting with Client</h4>
        <p>Discuss feedback and future plans.</p>
        <p><strong>Due:</strong> 2025-05-10</p>
      </div> */}
        </section>
      </main>
    </>
  );
}

export default Home;
