const joi=require('joi');
module.exports={
    Schema:{
        AddCat:joi.object({
            name:joi.string().required(),
            image: joi.string().required()
        })
    },
    ParamSchema:{
        id:joi.object({
            id:joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        })
    },
    imageSchema:{
        image:joi.object({
            image:joi.string().required()
        })
    }
}