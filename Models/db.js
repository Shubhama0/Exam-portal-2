import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //process.env.MONGO_URL
    await mongoose.connect(
      "mongodb+srv://imsuvamkr:s12345@cluster0.ntj1pkj.mongodb.net/"
    );
    console.log(`Connected to Mongodb Database`);
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`);
  }
};

export default connectDB;
