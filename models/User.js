import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
  },
  role: {
    type: String,
    minlength: 4,
    maxlength: 5,
    required: true,
  }
});

export default mongoose.model('users', UserSchema);