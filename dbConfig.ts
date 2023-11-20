import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/todo";

export const mainConnection = async () => {
  try {
    return await mongoose.connect(url).then(() => {
      console.log("db is connected");
    });
  } catch (error) {
    console.log(error);
  }
};
