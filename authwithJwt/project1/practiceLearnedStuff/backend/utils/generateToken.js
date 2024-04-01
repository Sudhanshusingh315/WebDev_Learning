const jwt = require("jsonwebtoken");
const  generateToken =  async(userId) =>{

  const token  = jwt.sign({
    userId,
  }, 'secret', { expiresIn: '1h' });

  return token;
}



module.exports = generateToken;