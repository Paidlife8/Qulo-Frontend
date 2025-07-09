// imageUpload.js

import { baseUrl } from "@/constants/urls";
import axios from "axios";

export const uploadImage = async (file, userId) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.patch(`${baseUrl}/user/add-profile-pics/${userId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
