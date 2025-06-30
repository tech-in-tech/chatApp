
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required:true
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });


const User = mongoose.model("User", userSchema);
export default User;

