import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    console.log("DB connected")
    app.on("error", (error) => {
        console.log("Error: ", error)
    })
    app.get('/health', (req, res) => {
        res.send("ok")
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Mongo db connection failed!!! :", err)
})