import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    created_on: {
        type: Date,
        default: Date.now,
      }
});
const userModel = mongoose.model('user',userSchema);
export default userModel