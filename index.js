//external import
const express=require("express")
const mongoose=require("mongoose")
const dotenv=require('dotenv');
const cookieParser=require('cookie-parser')
//internal import
const toDoRouter = require("./Router/toDoRouter");
const userRouter = require("./router/userRouter");

//create server app
const app=express();
dotenv.config()



//db connect

mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("mongo db connect"))
.catch(err=>console.log(err))



//data parsing

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


//router

app.use('/todo',toDoRouter)

app.use('/user',userRouter)

//server staring port

app.listen(process.env.PORT,()=>{
    console.log(`server connected at ${process.env.PORT}`)
})
