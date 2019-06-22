import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  user_id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 2
  },
  genre: {
    type: String,
    required: true,
  },
  image_name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  public: {
    type: Boolean,
  }
});

export default mongoose.model('movies', MovieSchema);