const foodModel=require('../model/food.model');
const { uploadFile } = require('../services/storage.service');
const {v4:uuid}=require('uuid');

async function createFood(req,res) {

    const fileUploadResult=await uploadFile(req.file.buffer,uuid());

    const foodItem=await foodModel.create({
        name:body.req.name,
        description:body.req.description,
        video:fileUploadResult.url,
        foodPartner:req.foodPartner._id
    })
    res.status(201).json({
        mssg:"food item created successfully",
        food:foodItem
    })
}

module.exports={createFood,}