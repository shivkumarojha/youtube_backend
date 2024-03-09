import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()

// Cors middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


// For accepting JSON
app.use(express.json({limit: "16kb"}))

// For URL configuration
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// For static files
app.use(express.static("public"))

// For cookies
app.use(cookieParser)

export default app