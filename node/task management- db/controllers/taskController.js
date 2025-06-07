
import {Task} from '../models/tasks.js'



export const getAllTasks = (req, res) => {
  // let tasks = getFileContent();
  // res.status(200).json({ success: true, tasks: tasks });
};

export const getSingleTask = (req, res) => {
  // let { id } = req.params;
  // let tasks = getFileContent();

  // let task = tasks.find((v) => v.id == id);
  // if (!task) {
  //   return res.json({
  //     success: false,
  //     message: "task not found",
  //   });
  // }
  // res.status(200).json({ success: true, task: task });
};

export const createTask = async (req, res) => {
  // console.log(req.body)
  try {
    let { title, description, dueDate } = req.body;
    await Task.create({title, description, dueDate})
    res.json({ success: true, message: "New Task added" });    
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message });
    
  }
  // try {
  //   let { title, description, dueDate } = req.body;
  //   let task = new Task({title,description,dueDate})
  //   await task.save()
  //   res.json({ success: true, message: "New Task added" });    
  // } catch (error) {
  //   console.log(error)
  //   res.json({ success: false, message: error.message });    
  // }
};

export const updateTask = (req, res) => {
  // let { id } = req.params;
  // let { title, description, dueDate } = req.body;
  // let tasks = getFileContent();
  // let index = tasks.findIndex(v=>v.id == id)  
  //   tasks[index].title = title;
  //   tasks[index].description = description;
  //   tasks[index].dueDate = dueDate;      
  // writeData(tasks);
  // res.json({ success: true, message: `Task updated with id - ${id}` });
};

export const deleteTask = (req, res) => {
  // let { id } = req.params;
  // let tasks = getFileContent();
  // let updatedTask = tasks.filter((v, i) =>  v.id != id);
  // writeData(updateTask);
  // res.json({ success: true, message: `Task deleted with id - ${id}` });
};
