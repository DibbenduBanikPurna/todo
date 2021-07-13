//external import
const express=require('express');
const { addData, getData, getSingleData, updateData, deleteData } = require('../controller/toDoController');
const checkLogIn = require('../middleware/checkLogIn');


const toDoRouter=express.Router();



//posting data 
toDoRouter.post('/', addData )


//find data
toDoRouter.get('/', checkLogIn,getData)

//find single data

toDoRouter.get('/:id',getSingleData)

//updating data

toDoRouter.put('/:id', updateData)

//delete data

toDoRouter.delete('/:id', deleteData)

module.exports=toDoRouter