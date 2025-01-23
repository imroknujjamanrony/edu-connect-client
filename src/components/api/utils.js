// import axios from "axios";

// export const imageUpload=async(file)=>{
//   console.log(ImageData);
//     const formData = new FormData();
//     formData.append("image", file);

//      //send image data to imgbb
//         const { data } = await axios.post(
//           `https://api.imgbb.com/1/upload?key=${
//             import.meta.env.VITE_IMGBB_API_KEY
//           }`,
//           formData
//           ,{headers:{'content-type': 'multipart/form-data'}}
//         );
        
//     return data.data.display_url
// }

//

export const imageUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // Your Cloudinary upload preset
  formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME); // Your Cloudinary cloud name

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Cloudinary upload failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data.secure_url; // Return the secure URL of the uploaded image
  } catch (error) {
    console.error("Image upload to Cloudinary failed:", error);
    throw error;
  }
};
