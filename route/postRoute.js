const route=require('express').Router();
const controller=require("../controller/postCon");

route.get("/",controller.all);
route.post("/",controller.add);
route.route("/:id")
.get(controller.singleData)
.patch(controller.patch)
.delete(controller.drop)

module.exports=route;