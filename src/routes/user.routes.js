import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword
} from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

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

userRouter.route("/login").post(loginUser)

// secured routes
userRouter.route("/logout").post(verifyJWT, logoutUser)

// let user refresh token
userRouter.route("/refresh-token").post(refreshAccessToken)

// change user Password
userRouter.route("/change-password").post(verifyJWT, changeCurrentPassword)
export { userRouter }; 