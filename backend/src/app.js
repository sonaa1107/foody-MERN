//create server
const express=require('express');
const cookieParser = require('cookie-parser');
const userRouter=require('./routes/auth.routes');

const app=express();
app.use(cookieParser()); 
app.use(express.json());
app.use('/api/auth',userRouter);

app.get("/",(req,res)=>{
    res.send("Hello world");
});
module.exports=app;