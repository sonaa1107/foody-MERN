const mongoose=require('mongoose');

const foodItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{
        type:String, //storing the url of video
        required:true
    },
    description:{
        type:String
    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foodpartner"
    },
},{timestamps:true})

const foodModel=mongoose.model("food",foodItemSchema);
module.exports=foodModel;