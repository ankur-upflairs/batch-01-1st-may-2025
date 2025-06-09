import { Task } from "../models/tasks.js";

export const getAllTasks = async (req, res) => {
  try {
    let tasks = await Task.find({});
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getSingleTask = async (req, res) => {
  try {
    let { id } = req.params;
    let task = await Task.findById(id);
    if (!task) {
      return res.json({
        success: false,
        message: "task not found",
      });
    }
    res.status(200).json({ success: true, task: task });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const createTask = async (req, res) => {
  // console.log(req.body)
  try {
    let { title, description, dueDate } = req.body;
    let task = new Task({ title, description, dueDate });
    await task.save()
    // await Task.create({ title, description, dueDate });
    res.json({ success: true, message: "New Task added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    let { id } = req.params;
    let { title, description, dueDate } = req.body;
    let task = await Task.findByIdAndUpdate(id,{ title, description, dueDate })
   
    res.json({ success: true, message: `Task updated`,task });
    
  } catch (error) {
    res.json({ success: false, message: error.message });
    
  }
};

export const deleteTask = async (req, res) => {
  try {
    let { id } = req.params;
    await Task.findByIdAndDelete(id)
    res.json({ success: true, message: `Task deleted with id - ${id}` });
    
  } catch (error) {
    res.json({ success: false, message: error.message });
    
  }  
};
