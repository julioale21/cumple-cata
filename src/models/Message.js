import { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
}, { strict: true });

MessageSchema.methods.toJSON = function() {
  const { __v, _id, password, ...message } = this.toObject();
  message.uid = _id;
  return message;
}

const Message = models.Message || model('Message', MessageSchema);

export default Message;