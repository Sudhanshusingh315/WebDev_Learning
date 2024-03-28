const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
  name: { type: String, required: true },

  email: { type: String, required: true, unique:true },

  password: { type: String, required: true,  },
},
{
  timestamps:true
}
);

// using a pre hook for password hashing, before we save the model  

userSchema.pre('save', async function(next){
  try{

   this.password = await bcrypt.hash(this.password,10);

  }catch(err){
    console.log(err);
  }
})


userSchema.methods.matchPasswords = async function(enteredPassword){
  // returns true or false 
  return await bcrypt.compare(enteredPassword,this.password);
}

const User = mongoose.model("User",userSchema);

module.exports = User;