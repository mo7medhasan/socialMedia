const express=require('express');
const app=express();
const PORT=process.env.PORT||5000;
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const multer=require("multer"); 
const path=require('path');
const cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
const { createProxyMiddleware } = require('http-proxy-middleware');

const userRoute=require('./routes/users.routes')
const authRoute=require('./routes/auth.routes')
const postRoute=require('./routes/posts.routes')
const conversationRoute=require('./routes/conversations.routes')
const messageRoute=require('./routes/messages.routes')


dotenv.config();

require('./db');
app.use("/images",express.static(path.join(__dirname,"public/images")))

//middleware 
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images") 
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name )
    }
})


const upload = multer({ storage })
 
app.post("/api/upload",upload.single("file"), (req,res)=>{
try {
    return res.status(200).json("file uploaded successfully")
} catch (err) {
    console.log(err);
}
})

app.get('/',(req,res)=>{
res.send("welcome to home page")
})
app.use('/api/upload', createProxyMiddleware({ target: 'https://social-media-mo7med.netlify.app/', changeOrigin: true }));
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/conversations",conversationRoute)
app.use("/api/messages",messageRoute)


app.listen(PORT,()=>{
console.log(`the server is connected ${PORT } 😀 🤗 😎`);
})