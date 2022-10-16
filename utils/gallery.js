const saveFile=async(req,res,next)=>{
    let photo=req.files.file;
    //console.log(photo);
    let imageName=new Date().valueOf()+"_"+photo.name;
    photo.mv(`./upload/${imageName}`);
    req.body["image"] =imageName;
    next();
}

const saveFiles=async(req, res, next)=> {
    let imageFile=[];
    let files=req.files.files;
    files.forEach((file) => {
        let filename=new Date().valueOf()+ "_" + file.name;
        file.mv(`./upload/${filename}`);
        imageFile.push(filename);
    });
    req.body["images"] = imageFile.join(",");
    next();
}

module. exports={
    saveFile,
    saveFiles
}