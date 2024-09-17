import mongoose from "mongoose";

//Connection to MongoDB
export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@dbfullstack.oxruum3.mongodb.net/");
      console.log(">>>DB CONNECTED");
  } catch (error) {
    console.log(error);
  }
};
