const todoModel = require('../Models/todoSchema');
 exports.post = async(req,res)=>{
        const  {todo} = req.body;
        if(!todo){
          res.status(500).json({message:"Required fields are missing"});
          return;
        }
       const todoItem = new todoModel({
            todo
       })
       await todoItem.save();
       res.status(200).json({
          message:"Todo Added..",
          data:todoItem,
          status:true,
      });
      }

    exports.get = async(req,res)=>{
        const todoList = await todoModel.find();
        res.status(200).json({
            message:"Data retrieved succesfully..",
            data:todoList,
            status:true,
        });
     }

     exports.deleteOne = async(req,res)=>{
        const todoItem = await todoModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"Data deleted succesfully..",
            data:todoItem,
            status:true,
        });
     } 

     exports.update = async(req,res)=>{
       const {todo,id} = req.body;
        const todoItem = await todoModel.findByIdAndUpdate(id,{todo},{new:true});
        res.status(200).json({
            message:"Data Updated succesfully..",
            data:todoItem,
            status:true,
        });
     }

     exports.deleteAll = async(req,res)=>{
        const todoList = await todoModel.deleteMany({});
        res.status(200).json({
            message:"Data deleted succesfully..",
            data:todoList,
            status:true,
        });
     }


