import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: { type: String }, // URL of the profile picture
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
