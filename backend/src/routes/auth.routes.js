const express=require('express');
const { userRegister } = require('../db/controller/auth.controller');
const router=express.Router

router.post('/user/register',userRegister)

module.exports=router;