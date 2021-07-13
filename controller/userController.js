//internal import
const User=require('../model/userModel')

const jwt=require('jsonwebtoken')

const bcrypt=require('bcrypt')



const SignUp=(async (req,res,next)=>{

    try{
        const hashedPassword= await bcrypt.hash(req.body.password,10)
        const user=new User({
            userName:req.body.userName,
            email:req.body.email,
            password:hashedPassword
        })

        await user.save()
        res.status(200).json({
            "success":"sign up Succeed!!"
        })
    }
    catch(err){
        console.log(err.message)
        res.status(401).json({
            Error:"authentication error!!!"
        })
    }

})


const LogIn=(async (req,res,next)=>{

    try{
        const user= await User.findOne({$or:[{userName:req.body.userName},{email:req.body.userName}]})
        if(user){

            const isPasswordValid=await bcrypt.compare(req.body.password, user.password)
            console.log(isPasswordValid);

            if(isPasswordValid){

                const token=jwt.sign({

                    userName:user.userName,
                    email:user.email
                  

                },process.env.SECRET_KEY,{
                    expiresIn:'1h'
                })

                // res.status(200).json({
                //     token,
                // })

                res
                .status(201)
                .cookie('access_token', 'Bearer ' + token, {
                  expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
                })

                 res.send("login successfully")
            }
            else{
                res.status(401).json({
                    Error:"authentication error!!!"
                })
            }
         

        }
        else{
            res.status(401).json({
                Error:"authentication error!!!"
            })

        }
    }
    catch(err){
        console.log(err.message)
        res.status(401).json({
            Error:"authentication error!!!"
        })
    }

})

module.exports={
    SignUp,LogIn
}