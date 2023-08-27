import mongoose from "mongoose";

export const dbConn = async () => {
  try {
    await mongoose.connect(process.env.LOCAL_DB_PORT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};
