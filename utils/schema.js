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
    },

    RegisterSchema:joi.object({
        name:joi.string().required(),
        email:joi.string().email().required(),
        password:joi.string().min(8).max(25).required(),
        phone:joi.string().min(11).required()
    }),

    postSchema:joi.object({
        cat:joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        image:joi.string().required(),
        title:joi.string().required(),
        desc:joi.string().required(),
        user:joi.optional()
    })

}