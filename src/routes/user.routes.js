import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

// For File upload
import { upload } from '../middlewares/multer.middleware.js'

const userRouter =  Router()

console.log("reached to user router")
userRouter.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )



export { userRouter }; 