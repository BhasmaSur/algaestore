import axios from 'axios';
// const initiateCloudinary = () => {
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
//     api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
//   });
// };

const uploadFileOnCloudinary = async (fileData) => {
  // initiateCloudinary();
  try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          fileData
        );
        if(response.status === 200){
          return response.data;
        }
      } catch (error) {
          return error; 
      }
};

export { uploadFileOnCloudinary };
