//mvc => model (data base /business logic) , view (html) , controller (app logic)
// server -> (port listen) -> request -> response 

import express from 'express'
import fs from 'fs'


const app = express()
//request -> method ->route
//method-> get (get data from server)
//post -> sending data to the server
//put/patch -> updating existing data on server
//delete -> delete a data on server
//Task Manager app
// {title,description,dueDate,id}
//middleware req -> middleware -> res
// app.use((req,res,next)=>{
//     req.user='gagan'
//     next()
// })
//this middleware add form data to req.body object
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/task',(req,res)=>{
    let file = fs.readFileSync('tasks.json','utf-8')
    let tasks = JSON.parse(file)
    res.status(200).json({success:true,tasks:tasks})
})
app.get('/task/:id',(req,res)=>{
    let {id} = req.params
    let file = fs.readFileSync('tasks.json','utf-8')
    let tasks = JSON.parse(file)
    let task = tasks.find(v=>v.id == id)
    if(!task){
        return res.json({
            success:false , message :"task not found"
        })
    }
    res.status(200).json({success:true,task:task})
})

app.post('/task',(req,res)=>{
    // console.log(req.body)
    let {title,description,dueDate} = req.body
    let file = fs.readFileSync('tasks.json','utf-8')
    let tasks = JSON.parse(file)
    let newId;
    if(tasks.length > 0){
        newId = tasks[tasks.length -1].id +1
    }
    else{
        newId = 1
    }
    let task ={id:newId,title,description,dueDate}
    tasks.push(task)
    let newTasks = JSON.stringify(tasks,null,2)
    fs.writeFileSync('tasks.json',newTasks)
    res.json({success: true, message:'New Task added'})
})

//dynamic id
app.put('/task/:id',(req,res)=>{
    let {id}=req.params
    let {title,description,dueDate} = req.body
    let file = fs.readFileSync('tasks.json','utf-8')
    let tasks = JSON.parse(file)
    let updatedTask = tasks.map((v,i)=>{
        if(v.id == id){
            v.title = title
            v.description= description
            v.dueDate= dueDate
            return v 
        }
        else{
            return v 
        }
    })
    let newTasks = JSON.stringify(updatedTask,null,2)
    fs.writeFileSync('tasks.json',newTasks)
    res.json({success: true, message:`Task updated with id - ${id}`})
    
})
app.delete('/task/:id',(req,res)=>{
    let {id}=req.params
    let file = fs.readFileSync('tasks.json','utf-8')
    let tasks = JSON.parse(file)
    let updatedTask = tasks.filter((v,i)=>{return v.id != id })
    let newTasks = JSON.stringify(updatedTask,null,2)
    fs.writeFileSync('tasks.json',newTasks)
    res.json({success: true, message:`Task deleted with id - ${id}`})
    
})

app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')
})

// app.get('/',(req,res)=>{
//     // console.log(req.user)
//     res.send('All Tasks data')
// })

// app.post('/create',(req,res)=>{
//     console.log(req.body)
//     res.send('New Task added')
// })

// //dynamic id
// app.put('/update/:id',(req,res)=>{
//     let params=req.params
//     res.send(`Task updated with id - ${params.id}`)
// })
// app.delete('/delete/:id',(req,res)=>{
//     let {id}=req.params
//     res.send(`Task deleted with id - ${id}`)
// })

// app.listen(3000,'localhost',()=>{
//     console.log('server is running on port 3000')
// })

