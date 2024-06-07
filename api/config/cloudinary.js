import {v2 as cloudinary} from 'cloudinary';
import {CloudinaryStorage} from "multer-storage-cloudinary"
import fs from "fs"
          
cloudinary.config({ 
  cloud_name: 'df8cktdi5', 
  api_key: '713869614891251', 
  api_secret: 'kpBaxGZSsoevCStqA1NJIA7R9zk' 
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Folder where images will be stored
    allowed_formats: ['jpg', 'png'],
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const uploadonCloudinary= async(localpath)=>{
    try {
        console.log(localpath)
        const result = await cloudinary.uploader.upload(localpath);
        console.log("reached till here")
        console.log("reached here too")
        console.log("uploaded",result.url)
        console.log(result)
        return result.url
    } catch (error) {
       
       return null
    }
}

export { uploadonCloudinary, cloudinary, storage,}