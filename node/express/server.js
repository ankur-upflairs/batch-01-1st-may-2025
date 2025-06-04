//mvc => model (data base /business logic) , view (html) , controller (app logic)
// server -> (port listen) -> request -> response 

import express from 'express'

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

app.get('/',(req,res)=>{
    // console.log(req.user)
    res.send('All Tasks data')
})

app.post('/create',(req,res)=>{
    console.log(req.body)
    res.send('New Task added')
})

//dynamic id
app.put('/update/:id',(req,res)=>{
    let params=req.params
    res.send(`Task updated with id - ${params.id}`)
})
app.delete('/delete/:id',(req,res)=>{
    let {id}=req.params
    res.send(`Task deleted with id - ${id}`)
})

app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')
})

