import mongoose from 'mongoose';
const userSchema = mongoose.Schema;

userSchema = new Schema({
  username: {
    type: String,
    minlength: 4,
    maxlength: 10,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 5,
    required: true,
    unique: true
  }
});

export default mongoose.model('users', userSchema);