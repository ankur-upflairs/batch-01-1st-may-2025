import fs from "fs";

function getFileContent() {
  let file = fs.readFileSync("tasks.json", "utf-8");
  let tasks = JSON.parse(file);
  return tasks;
}
function writeData(content) {
  let newTasks = JSON.stringify(content, null, 2);
  fs.writeFileSync("tasks.json", newTasks);
}

export const getAllTasks = (req, res) => {
  let tasks = getFileContent();
  res.status(200).json({ success: true, tasks: tasks });
};

export const getSingleTask = (req, res) => {
  let { id } = req.params;
  let tasks = getFileContent();

  let task = tasks.find((v) => v.id == id);
  if (!task) {
    return res.json({
      success: false,
      message: "task not found",
    });
  }
  res.status(200).json({ success: true, task: task });
};

export const createTask = (req, res) => {
  // console.log(req.body)
  let { title, description, dueDate } = req.body;
  let tasks = getFileContent();
    let newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
  let task = { id: newId, title, description, dueDate };
  tasks.push(task);
  writeData(tasks);
  res.json({ success: true, message: "New Task added" });
};

export const updateTask = (req, res) => {
  let { id } = req.params;
  let { title, description, dueDate } = req.body;
  let tasks = getFileContent();
  let index = tasks.findIndex(v=>v.id == id)  
    tasks[index].title = title;
    tasks[index].description = description;
    tasks[index].dueDate = dueDate;      
  writeData(tasks);
  res.json({ success: true, message: `Task updated with id - ${id}` });
};

export const deleteTask = (req, res) => {
  let { id } = req.params;
  let tasks = getFileContent();
  let updatedTask = tasks.filter((v, i) =>  v.id != id);
  writeData(updateTask);
  res.json({ success: true, message: `Task deleted with id - ${id}` });
};
