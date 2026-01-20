const foodPartnerModel=require('../model/foodpartner.model');
const userModel=require('../model/user.model');
const jwt=require('jsonwebtoken')

async function authFoodPartnerMiddleware(req,res,next) {
    const token=req.cookies.token;
    if(!token){
        res.status(401).json({
            mssg:'please login first'
        })
    }
    try{
        const foodPartnerPayload=jwt.verify(token,process.env.JWT_SECRET);
        const foodPartner=await foodPartnerModel.findById(foodPartnerPayload.id);
        req.foodPartner=foodPartner;
        next()
    }
    catch(err){
        res.status(401).json({
            mssg:"invalid token"
        })
    }
}
async function authUserMiddleware(req,res,next) {
    const token=req.cookies.token 
    if(!token){
        res.status(401).json({
            mssg:'please login first'
        })
    } 
    try{
        const userPayload=jwt.verify(token,process.env.JWT_SECRET);
        const user=await userModel.findById(userPayload.id);
        req.user=user;
        next()
    }  
    catch(err){
        res.status(401).json({
            mssg:"invalid token"
        })
    }
}

module.exports={authFoodPartnerMiddleware,authUserMiddleware}