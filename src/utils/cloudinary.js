import { v2 as cloudinary } from "cloudinary";
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});




const uploadOnCloudinary = async(localFilePath) => {
    try {
        console.log("cloudinary ", localFilePath)
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        
        // File Successfully uploaded
        console.log("File is uploaded on cloudinary ", response.url)
        fs.unlinkSync(localFilePath);
        return response
    }

    catch (error) {
        fs.unlinkSync(localFilePath) // Remove locally saved temporary file after complete up
        return null
    }
}


export {uploadOnCloudinary}