const jwt=require('jsonwebtoken');
const userDB=require('../model/userModel');
module.exports={
    validateBody:(Schema)=>{
            return(req, res, next) =>{
            let result=Schema.validate(req.body);
            //console.log(result);
            if(result.error){
                let ans=result.error.details[0].message;
                //console.log(ans);
                //next (new Error(ans));
                res.json({msg:ans});
            }else{
                next();
            }
        }
    },
    validateParam:(schema,name)=>{
        return(req,res,next)=>{
            let obj={};
            obj[`${name}`]=req.params[`${name}`];
            let result=schema.validate(obj);
            console.log(result);
            if(result.error){
                // let ans=result.error.details;
                // console.log(ans);
                res.json({msg:"Id format is wrong"});
                //next(new Error(ans));
            }else{
                next();
            }
        }
    },
    ValidateToken:async(req,res,next)=>{
        let token =req.headers.authorization; // take token
        if(token){
            token=token.split(" ")[1]; // leave bearer
            //console.log(token);
            let decode=jwt.decode(token,process.env.SECRET_KEY); // decode token number
            let user=await userDB.findById(decode._id); // find in user table with id
            if(user){
                req.body['user']=user;
                next();
            }else{
                //next (new Error("Token error") );
            res.json({msg:"Token error"});
            }

        }else{
            //next (new Error("Token error") );
            res.json({msg:"Token error"});
        }     
        
       }

}