const express=require('express');
const { userRegister, userLogin, userLogout } = require('../controller/auth.controller');
const router=express.Router();

router.post('/user/register',userRegister)
router.post('/user/login',userLogin)
router.get('/user/logout',userLogout)


module.exports=router;