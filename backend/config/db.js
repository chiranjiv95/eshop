import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected : ".green.inverse + conn.connection.host.green.inverse);
  } catch (error) {
    console.log(`DB connection failed : `.red + error.message.red.inverse);
    process.exit(1);
  }
};

export default connectDB;
