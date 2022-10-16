const route=require('express').Router();
const controller=require("../controller/postCon");
const {ValidateToken,validateBody}=require('../utils/validation');
const {postSchema}=require('../utils/schema');
const {saveFile}=require('../utils/gallery');


route.get("/",controller.all);
route.post("/",ValidateToken,saveFile,validateBody(postSchema), controller.add);

route.get('/byCat/:id',controller.CatId);
route.get('/:id',controller.userId);


route.route("/:id")
.get(controller.singleData)
.patch(ValidateToken, controller.patch)
.delete(ValidateToken, controller.drop)

module.exports=route;