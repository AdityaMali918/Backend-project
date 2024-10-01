import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

// (async function () {



//     // Upload an image
//     const uploadResult = await cloudinary.uploader
//         .upload(
//             'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//             public_id: 'shoes',
//         }
//         )
//         .catch((error) => {
//             console.log(error);
//         });

//     console.log(uploadResult);

// })();

const uploadOnCloudinary = async (localFilePath) => {
    try {

        // Configuration
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
        });

        if (!localFilePath) {
            return null;
        }

        const response = await cloudinary.uploader
            .upload(
                localFilePath, {
                resource_type: "auto",
            }
            )

        console.log("File is uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved
        return null ;                 //temporary file as the upload operationgot failed.
    }
}

export {uploadOnCloudinary}