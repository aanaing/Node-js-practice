const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const fMsg = async (res, msg = "success ", result = []) => {
    res.status(200).json({
      con: true,
      msg,
      result,
    });
  };
  module.exports = {
    encode:password=>bcrypt.hashSync(password,10),
    comparePassword:(plain,hash)=>bcrypt.compareSync(plain,hash),
    makeToken:payload=>jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1hr"}),
    fMsg,
  };
  