const mongoose=require('mongoose');
const dotenv=require("dotenv");





mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,useUnifiedTopology:true},
    ()=>{console.log("Connected to MongoDB 🤑🙈🐸");}
)

exports.mongoose;
