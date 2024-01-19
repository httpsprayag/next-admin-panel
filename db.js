import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/next-auth")
      .then(() => console.log("database connected successfully...."))
      .catch(() => {
        console.log("Something went wrong while connecting to database");
      });
  } catch (error) {
    throw new Error("Error while connceting to database...");
  }
};
