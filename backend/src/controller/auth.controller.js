const bcrypt=require('bcrypt')
const User=require('../model/user.model')
const jwt=require('jsonwebtoken');
const foodPartner = require('../model/foodpartner.model');

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
    },process.env.JWT_SECRET)

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
async function userLogin(req,res){
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        res.status(400).json({
            mssg:"incorrect email or password"
        })
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        res.status(400).json({
            mssg:"incorrect email or password"
        })
    }
    const token=jwt.sign({
        id:user._id,
        email:user.email
    },process.env.JWT_SECRET)
    res.cookie('token',token)

    res.status(200).json({
        mssg:"user logged in successfully",
        User:{
            name:user.name,
            email:user.email,
            id:user._id
        }
    })
}
async function userLogout(req,res){
    res.clearCookie('token')
    res.status(200).json({
        mssg:"user logout successfully"
    })
}
async function foodPartnerRegister(req,res){
    const{name,email,password,contactName,phoneNo,address}=req.body;

    const foodPartnerAlreadyExist=await foodPartner.findOne({email})
    if(foodPartnerAlreadyExist){
        res.status(400).json({
            mssg:"food partner already exist try with differenet email"
        })
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const foodpartner=await foodPartner.create({
        name,
        email,
        password:hashedPassword,
        contactName,
        phoneNo,
        address,
    })

    const token=jwt.sign(
        {id:foodpartner._id,email:foodpartner.email}
        ,process.env.JWT_SECRET
    )
    res.cookie("token",token);

    res.status(201).json({
        mssg:"food partner successfully register",
        foodPartner:{
        id:foodpartner._id,
        name:foodpartner.name,
        email:foodpartner.email
        }
    })
}

async function foodPartnerLogin(req,res) {
    const {email,password}=req.body;
    const foodpartner=await foodPartner.findOne({email});
    if(!foodpartner){
        res.status(400).json({
            mssg:"incorrect email or password"
        })
    }
    const isMatch=await bcrypt.compare(password,foodpartner.password);
    if(!isMatch){
        res.status(400).json({
            mssg:"incorrect email or password"
        })
    }
   const token=jwt.sign(
        {id:foodpartner._id,email:foodpartner.email}
        ,process.env.JWT_SECRET
    )
    res.cookie("token",token);

    res.status(201).json({
        mssg:"food partner successfully login",
        foodPartner:{
        id:foodpartner._id,
        name:foodpartner.name,
        email:foodpartner.email
        }
    })
}

async function foodPartnerLogout(req,res) {
    res.clearCookie("token").status(200).json({
        mssg:"food partner logout successfully"
    })
}
module.exports={
    userRegister,
    userLogin,
    userLogout,
    foodPartnerRegister,
    foodPartnerLogin,
    foodPartnerLogout,
}