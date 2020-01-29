import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';
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
    type: Array,
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
  public_user: {
    type: Boolean,
  },
  public_check_admin: {
    type: Boolean
  }
});

// Sayfalama için gerekli eklenti.
MovieSchema.plugin(paginate);

export default mongoose.model('movies', MovieSchema);