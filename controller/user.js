const { createToken } = require('../middleware/auth')
const user = require('../model/user')
const User=require('../model/user')


const postSignup=async(req,res)=>{

    try {
        const{username,email,password,guest}=req.body
       

        User.create({username,email,password,guest})
        const createUser=await ({message:'user create'})
        res.json(createUser)     
    } catch (error) {
        console.log(error);  
    }
} 

const postLogin=async(req,res)=>{

    try {
        const{email,password}=req.body

        const user=await User.findOne({email})
        if(!user)return res.status(404).json({message:'user not found'})

        const isPassword=await user.comparePassword(password)
        if(!isPassword)return res.status(404).json({message:'invalid credentials'})

            const token=createToken(user)
            res.json({message:'login successful',token})
    } catch (error) {
        console.log(error);
    }  
}

const guestPost=async(req,res)=>{
    try {
        const {id}=req.params  
        const{username,guest,role}=req.body 
        
        const token= createToken({id,username,guest,role})
       return res.json({message:`successfully login as ${role==='admin'? 'admin':'user'}`, token})
    } catch (error) {
        console.log(error)
    }
}
module.exports={postSignup,postLogin,guestPost}