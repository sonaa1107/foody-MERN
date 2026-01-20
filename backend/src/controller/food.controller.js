const foodModel=require('../model/food.model');
const { uploadFile } = require('../services/storage.service');
const {v4:uuid}=require('uuid');

async function createFood(req,res) {

    const fileUploadResult=await uploadFile(req.file.buffer,uuid());

    const foodItem=await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        video:fileUploadResult.url,
        foodPartner:req.foodPartner._id
    })
    res.status(201).json({
        mssg:"food item created successfully",
        food:foodItem
    })
}
async function getFoodItem(req,res) {
    const food=await foodModel.find({});
    res.status(200).json({
        mssg:"food items fetched successfully",
        food
    })
}

module.exports={createFood,getFoodItem}