const mongoose=require("mongoose");
const {Schema}=mongoose;

const postSchema=new Schema({
    user:{type:Schema.Types.ObjectId, required:true, ref:"user"},
    title: {type : String, required: true},
    desc: {type: String, required:true},
    created : {type: Date, default:Date.now}
})

const postData=mongoose.model("post",postSchema);
module.exports=postData;