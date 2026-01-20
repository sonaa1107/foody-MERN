const express=require('express');
const { authFoodPartnerMiddleware, authUserMiddleware, } = require('../middleware/auth.middleware');
const { createFood, getFoodItem } = require('../controller/food.controller');
const router=express.Router();
const multer=require('multer')

const upload=multer({
    storage:multer.memoryStorage(),
})

//post /api/food/ [protected]
router.post('/',authFoodPartnerMiddleware,
    upload.single("video"),
    createFood)

//get /api/food/ [protected]
    router.get('/',authUserMiddleware,getFoodItem)
module.exports=router;