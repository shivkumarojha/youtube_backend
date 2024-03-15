import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory
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

// Get current user
userRouter.route("/current-user").get(verifyJWT, getCurrentUser)

//  Update Account details
userRouter.route("/update-account").patch(verifyJWT, updateAccountDetails)

// update user avatar
userRouter.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)

// update cover Image
userRouter.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage)

// get Channel profile
userRouter.route("/c/:username").get(verifyJWT, getUserChannelProfile)

// get watch history
userRouter.route("/watch-history").get(verifyJWT, getWatchHistory)


export { userRouter }; 