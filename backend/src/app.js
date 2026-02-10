//create server
const express=require('express');
const cookieParser = require('cookie-parser');
const userAndFoodPartnerRouter=require('./routes/auth.routes');
const foodRouter=require('./routes/food.routes')
const cors=require('cors');
const app=express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(cookieParser()); 
app.use(express.json());
app.use('/api/auth',userAndFoodPartnerRouter);
app.use('/api/food',foodRouter);

app.get("/",(req,res)=>{
    res.send("Hello world");
});
module.exports=app;