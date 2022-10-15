const express=require("express");
const app=express();
app.use(express.json()); // to get body data
require("dotenv").config();//to use port number
const mongoose=require('mongoose');// to connect db
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);// to connect with db
const fileUpload = require('express-fileupload'); ///to upload file
app.use(fileUpload());// to upload images
const {saveFile}=require("./utils/gallery");
const path=require('path'); // to image on browser


//for image upload
app.post("/gallery", saveFile, (req,res,next)=>{
res.status(200).json({msg:"file Upload", filename:req.body.image});
}) 
app.use('/upload',express.static(path.join(__dirname,'upload')));


const catRoute=require('./route/catRoute');
app.use('/cat',catRoute);

const userRoute=require("./route/userRoute");
app.use('/user',userRoute);

const postRouter=require("./route/postRoute");
const { response } = require("express");

app.use('/post',postRouter);

app.listen(process.env.PORT,console.log(`sever is running at port ${process.env.PORT}`));