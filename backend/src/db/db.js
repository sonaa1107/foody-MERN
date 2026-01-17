const mongoose=require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MongoURL)
    .then(()=>{
        console.log("MongoDB connected")
    })
    .catch((err)=>{
        console.log('MongoDB connection',err);
    })
}
module.exports=connectDB;