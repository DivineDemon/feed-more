import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    mongoose.set("strictQuery", false);
    const response = await mongoose.connect(url);
    console.log(`MongoDB Connected: ${response.connection.host}:${response.connection.port}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectDB;