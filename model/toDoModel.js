const mongoose=require('mongoose')



const toDoSchema=mongoose.Schema({

    Title:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
       

    },
    Description:{
        type:String,
        trim:true,
        required:true
    },
    Status:
    {
        type:String,
        enum:['active','inactive']
    },
    Date:
    {
        type:Date,

        default:Date.now
    }

},{
    timestamps:true
})

const ToDo=new mongoose.model("ToDo", toDoSchema)


module.exports=ToDo