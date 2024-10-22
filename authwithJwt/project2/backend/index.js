const express = require("express");
const data = require("./data");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

// verifying token

const verify = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    res.status(401).json({
      success: false,
      msg: "Unauthorized token is not valid",
    });
  }
  try {
    token = token.split(" ")[1]; 
    const decoded = jwt.verify(token,"meow");
    if (!decoded) {
      throw new Error("Token is not valid, login again");
    }
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      test:"testing",
      msg: err.message,
    });
  }

};

// post method for refresh token
app.post('/refresh',(req,res)=>{
	
})


// post method for login

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  const userExist = data.filter((user) => {
    return user.name === name;
  });
  if (userExist) {
    const token = jwt.sign({ userExist }, "meow", { expiresIn: "20s" });
    res.status(201).json({ token });
  } else {
    res.status(401).send("user does not exists");
  }
});

// user Details

app.get("/user", verify, (req, res) => {
	const details = req.user;
	res.status(201).json({
		success:true,
		message:"User details fetched",
		data:{
			userDetails: details 
		}
	})
});








app.listen(4000, () => {
  console.log("server running at 4000");
});
