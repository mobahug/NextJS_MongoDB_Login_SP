import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    //if excist email, it will not create new user
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//if there is already schem (first part) then don t create,
//otherwise create new schema(second part)
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
