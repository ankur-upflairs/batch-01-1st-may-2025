import { Schema ,model} from "mongoose";

let taskSchema = new Schema({
    title:String,
    description:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date
    }
},{timestamps:true})

export let Task = model('Task',taskSchema)
