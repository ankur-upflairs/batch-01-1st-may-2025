import React from 'react'
import {Link} from 'react-router'
function Navbar() {
  return (
    <nav>
    <h1>Task Manager</h1>
    <ul>
      <li><Link href="index.html">Home</Link></li>
      <li><Link href="add.html">Add Task</Link></li>
      <li><Link href="view.html">View Tasks</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar