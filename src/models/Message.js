import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { strict: true });

const Message = model('Message', MessageSchema);

export default Message;