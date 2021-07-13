//external import
const express=require('express');
//internal import
const { SignUp, LogIn } = require('../controller/userController');


const userRouter=express.Router()


//sign up
userRouter.post('/signup',SignUp)



//login

userRouter.post('/login',LogIn)



module.exports=userRouter;