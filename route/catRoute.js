const route=require('express').Router();
const controller=require('../controller/catCon');
const {saveFile}=require('../utils/gallery');
const {Schema,ParamSchema,imageSchema}=require('../utils/schema');
const {validateBody,validateParam}= require('../utils/validation');

route.get('/',controller.all);
route.post('/',[saveFile,validateBody(Schema.AddCat), controller.add]);
route.route('/:id')
.get(validateParam(ParamSchema.id,"id"),controller.singleCat)
//.patch(validateParam(ParamSchema.id,"id"), controller.patch)
.patch(saveFile,validateBody(imageSchema.image),controller.patch)
.delete(validateParam(ParamSchema.id,"id"),controller.drop)

module.exports=route; 