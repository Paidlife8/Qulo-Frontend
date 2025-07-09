import { baseUrl } from "@/constants/urls";
import axios from "axios";

const getProfile = async () => {
  const userAuthToken = localStorage.getItem("elite-trust-finance-usertoken");
  const userId = localStorage.getItem("elite-trust-finance-userid");

  console.log("User Auth Token: " + userAuthToken);
  const response = await axios.get(`${baseUrl}/user/getUser/${userId}`, {
    headers: {
      Authorization: `Bearer ${userAuthToken}`,
    },
  });
  console.log(response.data, "fetch requests from response");
  return response.data;
};

const editProfile = async (id, userData) => {
  try {
    const userAuthToken = JSON.parse(localStorage.getItem("solarPrinexToken"));
    console.log("data returned", userData);
    const formData = ConvertToFormData(userData);
    const response = await axios.post(
      `${baseUrl}user/update-applications/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${userAuthToken}`,
        },
      }
    );
    console.log(response, "from response update request");
    return response;
  } catch (err) {
    console.log("The error", err);
  }
};

const profileService = {
  editProfile,
  getProfile,
};

export default profileService;
