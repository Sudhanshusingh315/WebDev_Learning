const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
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

userSchema.pre('save',async function(next){
  if(){
    
  }
})

const User = mongoose.model("User",userSchema);

module.exports = User;