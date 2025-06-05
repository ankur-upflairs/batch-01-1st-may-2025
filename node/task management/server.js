import express from 'express'
import taskRouter from './routes/taskRoutes.js'
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/task',taskRouter)


app.listen(3000,'localhost',()=>{
    console.log('server is running on port 3000')
})
