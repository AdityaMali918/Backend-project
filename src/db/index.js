import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected ${connectionInstance.connections[0].host}`);
        //connection.host
    } catch (error) {
        console.log("MongoDB ERROR DB FOLDER", error);
        process.exit(1);
    }
}

export default connectDB;