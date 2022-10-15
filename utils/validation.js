module.exports={
    validateBody:(Schema)=>{
            return(req, res, next) =>{
            let result=Schema.validate(req.body);
            //console.log(result);
            if(result.error){
                let ans=result.error.details[0].message;
                console.log(ans);
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
    

}