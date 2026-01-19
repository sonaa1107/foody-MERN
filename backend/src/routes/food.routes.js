const express=require('express');
const { authFoodPartnerMiddleware } = require('../middleware/auth.middleware');
const { createFood } = require('../controller/food.controller');
const router=express.Router();
const multer=require('multer')

const upload=multer({
    storage:multer.memoryStorage(),
})

//post /api/food/ [protected]
router.post('/',authFoodPartnerMiddleware,
    upload.single("video"),
    createFood)

module.exports=router;