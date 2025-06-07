import express from 'express'
let router = express.Router()
import { createTask, deleteTask, getAllTasks, getSingleTask, updateTask } from '../controllers/taskController.js'

router.get('/',getAllTasks)
router.get('/:id',getSingleTask)

router.post('/',createTask)

//dynamic id
router.put('/:id',updateTask)
router.delete('/:id',deleteTask)


export default router

