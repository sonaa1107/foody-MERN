//create server
const express=require('express');
const cookieParser = require('cookie-parser');
const userAndFoodPartnerRouter=require('./routes/auth.routes');
const foodRouter=require('./routes/food.routes')

const app=express();
app.use(cookieParser()); 
app.use(express.json());
app.use('/api/auth',userAndFoodPartnerRouter);
app.use('/api/food',foodRouter);

app.get("/",(req,res)=>{
    res.send("Hello world");
});
module.exports=app;