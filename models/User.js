import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })

let User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User
