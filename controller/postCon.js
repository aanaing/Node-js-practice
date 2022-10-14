const DB=require("../model/postModel");
const helper=require("../utils/message");

const all=async(req,res,next)=>{
    let result=await DB.find().populate('user');
    helper.fMsg(res,"Get all post data",result);
}

const add=async (req, res, next)=>{
    let result=await new DB(req.body).save();
    helper.fMsg(res,"Add new post Data",result);
}

const singleData=async(req,res,next)=>{
    let result=await DB.findById(req.params.id).populate('user');
    if(result){
        helper.fMsg(res,"Get single post data",result);
    }else{
        next(new Error("Can't find id"));
    }
}
const patch=async (req,res, next) =>{
    let postId=await DB.findById(req.params.id);
    if(postId){
        await DB.findByIdAndUpdate(postId._id,req.body);
        let result=await DB.findById(postId._id);
        helper.fMsg(res,"Update post data",result);
    }else{
        next(new Error("Can't find id to update"));
    }
}

const drop=async(req,res,next)=>{
    let postId=await DB.findById(req.params.id);
    if(postId){
        let result=await DB.findOneAndDelete(postId);
        helper.fMsg(res,"Delete post data",result);
    }else{
        next(new Error("Can't find id to delete"));
    }
}

module.exports={
    all,
    add,
    patch,
    drop,
    singleData
}