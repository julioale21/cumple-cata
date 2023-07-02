import { Schema, model, models } from 'mongoose';

const PhotoSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
}, { strict: true });

PhotoSchema.methods.toJSON = function() {
  const { __v, _id, ...photo } = this.toObject();
  photo.uid = _id;
  return photo;
}

const Photo = models.Photo ||  model('Photo', PhotoSchema);

export default Photo;