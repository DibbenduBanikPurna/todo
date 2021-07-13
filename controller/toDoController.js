
const ToDo=require('../model/toDoModel')


//posting data functionality
const addData=(async (req,res,next)=>{

    try{
    const todo=new ToDo(req.body)

    await todo.save();

    res.status(200).json({
        "Success":"Data added successfully"
    })

    }
    catch(err){
        console.log(err.message)
        res.status(500).json({
            Error:"Data post failed"
        })
    }



})


//getting data functionality
const getData=(async (req,res,next)=>{

    try{
       const data=await ToDo.find({},{__v:0})

        res.status(200).json({
            data,
        })

    }
    catch(err){
        console.log(err.message)
        res.status(500).json({
            Error:"Data Not Found"
        })
    }

})

//single data get functionality
const getSingleData=(async (req,res,next)=>{

    try{
        const data= await ToDo.findOne({},{__v:0})

        res.status(200).json({
            data,
        })

    }
    catch(err){
        console.log(err.message)
        res.status(500).json({
            Error:"Data Not Found"
        })
    }

})

//update single data functionality

const updateData=(async (req,res,next)=>{

    try{
        await ToDo.updateOne({_id:req.params.id},{
            Title:req.body.Title,
            Description:req.body.Description,
            Status:req.body.Status

        })

        res.status(200).json({
            "Success":"data updated"
        })

    }
    catch(err){
        console.log(err.message)
        res.status(500).json({
            Error:"Data Not Updated"
        })
    }

} )

//delete data functionality
const deleteData=(async (req,res,next)=>{

    try{
        await ToDo.deleteOne({_id:req.params.id})

        res.status(200).json({

            "Success":"Data deleted Successfully"
        })

    }
    catch(err){
        console.log(err.message)
        res.status(500).json({
            Error:"Data Not Deleted"
        })
    }

})


module.exports={
    addData,getData,getSingleData,updateData,
    deleteData
}