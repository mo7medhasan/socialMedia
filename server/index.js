const express=require('express');
const app=express();
const PORT=process.env.PORT||5000;
const mongoose=require('mongoose');
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
 


const userRoute=require('./routes/users.routes')
const authRoute=require('./routes/auth.routes')
const postRoute=require('./routes/posts.routes')


dotenv.config();
require('./db');

//middleware 
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))

app.get('/',(req,res)=>{
res.send("welcome to home page")
})

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)

app.listen(PORT,()=>{
console.log("the server is connected 😀🤗😎");
})