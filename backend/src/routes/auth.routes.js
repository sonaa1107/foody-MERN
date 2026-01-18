const express=require('express');
const { userRegister, userLogin, userLogout, foodPartnerRegister, foodPartnerLogin, foodPartnerLogout } = require('../controller/auth.controller');
const router=express.Router();

//user api
router.post('/user/register',userRegister)
router.post('/user/login',userLogin)
router.get('/user/logout',userLogout)

//food-partner api
router.post('/food-partner/register',foodPartnerRegister)
router.post('/food-partner/login',foodPartnerLogin)
router.get('/food-partner/logout',foodPartnerLogout);


module.exports=router;