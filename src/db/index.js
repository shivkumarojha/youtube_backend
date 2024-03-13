import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log("Mongo connection start")
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\n MongoDb connected!! DB HOST: ${connectionInstance.connection.host}`)

    } catch(error) {
        console.log("Mongo error: ", error)
        process.exit(1)
    }
}

export default connectDB