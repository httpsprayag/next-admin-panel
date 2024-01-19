import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/next-auth");
    console.log("Database connection successfully...")
  } catch (error) {
    throw new Error('Error in connecting to database....')
  }
}

export default ConnectDb

