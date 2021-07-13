//external import
const jwt=require('jsonwebtoken')

const checkLogIn=(async (req,res,next)=>{

    try{
    const {access_token}=req.cookies

    const token=access_token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY)

    next()
        

    }
    catch(err){
        console.log(err.message)
        res.status(500).json({
            Error:"authorization errror!!!"
        })
    }

})

module.exports=checkLogIn