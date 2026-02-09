const mongoose=require('mongoose');
const foodPartnerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    contactName:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:String,
        required:true,  
    },
    address:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }

},{timestamps:true})
const foodPartner= mongoose.model('foodpartner',foodPartnerSchema)

module.exports=foodPartner;