const DB=require('../model/catModel');
const helper=require('../utils/message');

const all=async (req, res, next)=>{
   let result=await DB.find();
   helper.fMsg(res,"Get category Data",result);
}

const add=async (req, res, next)=> {
    let name=await DB.findOne({name:req.body.name});    
    if(name){
        //next(new Error("Name is already exit"));
        res.json({msg:"Name is already exit"});
    }
        let result=await DB(req.body).save();
        helper.fMsg(res,"Add new category",result);
    
    
}

const singleCat= async(req , res, next) =>{
    let result=await DB.findById(req.params.id);
    helper.fMsg(res,"Get single category",result);
}

const patch=async(req,res,next)=>{
    let cat=await DB.findById(req.params.id);
    if(cat){
        await DB.findByIdAndUpdate(cat._id,req.body);
        let catId=await DB.findById(cat._id);
        helper.fMsg(res,"update cat",catId);
    }else{
        next(new Error("can't find id"));
    }
};
const drop=async(req, res, next)=>{
    let dropId=await DB.findById(req.params.id);
    if(dropId){
        let ans= await DB.findByIdAndDelete(dropId._id);
        helper.fMsg(res,"delete category",ans);
    }else{
        next(new Error("Can't find id to delete"));
    }

}

module.exports={
    all,
    add,
    singleCat,
    patch,
    drop
}
