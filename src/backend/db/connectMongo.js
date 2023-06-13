import mongoose from 'mongoose';

const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);

const disconectMongo = async () => mongoose.connection.close();

export { connectMongo, disconectMongo };