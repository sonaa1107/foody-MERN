const bcrypt=require('bcrypt')
const User=require('../model/user.model')
const jwt=require('jsonwebtoken')

async function userRegister(req,res){
    const {name,email,password}=req.body;

    const isUserAlreadyExist=await User.findOne({email});
    if(isUserAlreadyExist){
        return res.status(400).json({
            mssg:"User already exist"
        })
    }
    const hashedPassword= await bcrypt.hash(password,10);

    const user= await User.create({
        name,email,password:hashedPassword
    })
    const token=jwt.sign({
        id:user._id
    },'6ee8a840bb8d4c2fb51af79b992abefe')

    res.cookie("token",token);

    res.status(201).json({
        mssg: "User successfully created",
        User:{
            name:user.name,
            email:user.email,
            id:user._id
        }
    })

}
module.exports={
    userRegister,
}