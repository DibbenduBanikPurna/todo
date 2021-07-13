const mongoose=require('mongoose')



const userSchema=mongoose.Schema({

    userName:{
        type:String,
        
        trim:true,
        lowercase:true,
       

    },
   email:{
        type:String,
        trim:true,
        
    },
    password:{
        type:String,
        required:true
    }
    

},{
    timestamps:true
})

const User=new mongoose.model("User",userSchema)

module.exports=User