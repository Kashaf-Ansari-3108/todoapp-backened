import mongoose from "mongoose";
const todoSchema = mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    created_on: {
        type: Date,
        default: Date.now,
      }
});
const todoModel = mongoose.model('todo',todoSchema);
export default todoModel