import { v2 as cloudinary } from "cloudinary";
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async(localFilePath) => {
    try {
        if(!localFilePath) {
            return "Local File Path Not Found"
        }
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // File Successfully uploaded
        console.log("File is uploaded on cloudinary ", response.url)
        return response
    }

    catch (error) {
        fs.unlink(localFilePath) // Remove locally saved temporary file after complete up
        return null
    }
}


export {uploadOnCloudinary}