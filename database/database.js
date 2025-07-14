import mongoose from 'mongoose';
const connectDB = async () => {
  try{
    const connect = await mongoose.connect('mongodb+srv://sandesh:sandesh123@assignmentcluster.anpuejz.mongodb.net/?retryWrites=true&w=majority&appName=Assignmentcluster');
    console.log('MongoDB connected successfully!');
  }catch(err){
    console.error('MongoDB connection failed:', err);
  }
};

export default connectDB;
