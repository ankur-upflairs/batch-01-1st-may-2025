import express from 'express'
import taskRouter from './routes/taskRoutes.js'
import mongoose from 'mongoose'
const app = express()


mongoose.connect('mongodb+srv://lead:lead123@cluster0.mk94png.mongodb.net/shop')
.then(()=>console.log('db connected'))
.catch((err)=>console.log(err))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/task',taskRouter)

app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')
})
