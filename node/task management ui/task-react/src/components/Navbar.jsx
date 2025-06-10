import React from 'react'
import {Link} from 'react-router'
function Navbar() {
  return (
    <nav>
    <h1>Task Manager</h1>
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/addtask'}>Add Task</Link></li>
      <li><Link to={'/viewtask'}>View Tasks</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar


