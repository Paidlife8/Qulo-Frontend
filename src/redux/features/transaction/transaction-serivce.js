import { baseUrl } from "@/constants/urls";
import axios from "axios";

const getSingleTransfer = async (id) => {
  const userAuthToken = JSON.parse(localStorage.getItem("solarPrinexToken"));
  console.log("User Auth Token: " + userAuthToken);
  const response = await axios.get(`${baseUrl}user/view-applications/${id}`, {
    headers: {
      Authorization: `Bearer ${userAuthToken.token}`,
    },
  });
  console.log(response.data, "fetch requests from response");
  return response.data;
};

const getTransfers = async () => {
  const userAuthToken = localStorage.getItem("elite-trust-finance-usertoken");
  const userId = localStorage.getItem("elite-trust-finance-userid");
  const response = await axios.get(
    `${baseUrl}/transfer/user-transactions/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${userAuthToken}`,
      },
    }
  );
  console.log(response.data, "fetch requests from response");
  return response.data;
};

const createTransfer = async (userData) => {
  try {
    const userAuthToken = localStorage.getItem("elite-trust-finance-usertoken");
    const userId = localStorage.getItem("elite-trust-finance-userid");
    console.log("data returned", userData);
    const response = await axios.post(
      `${baseUrl}/transfer/create-transfer`,
      userData,
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

const verifyOtp = async (userData) => {
  try {
    const userAuthToken = localStorage.getItem("elite-trust-finance-usertoken");
    const userId = localStorage.getItem("elite-trust-finance-userid");
    console.log("data returned", userData);

    const response = await axios.post(
      `${baseUrl}/user/verify/${userId}`,
      userData,
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

const sendOtp = async (userData) => {
  try {
    const userAuthToken = localStorage.getItem("elite-trust-finance-usertoken");
    const userId = localStorage.getItem("elite-trust-finance-userid");
    console.log("data returned", userData);

    const response = await axios.post(`${baseUrl}/user/create-otp`, userData, {
      headers: {
        Authorization: `Bearer ${userAuthToken}`,
      },
    });
    console.log(response, "from response update request");
    return response;
  } catch (err) {
    console.log("The error", err);
  }
};

const verifyCot = async (id, userData) => {
  try {
    const userAuthToken = localStorage.getItem("elite-trust-finance-usertoken");
    const userId = localStorage.getItem("elite-trust-finance-userid");
    console.log("data returned", userData);
    const response = await axios.post(
      `${baseUrl}/user/verify-cot/${userId}`,
      userData,
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

const sendCot = async (userData) => {
  try {
    const userAuthToken = localStorage.getItem("elite-trust-finance-usertoken");
    const userId = localStorage.getItem("elite-trust-finance-userid");
    console.log("data returned", userData);
    const response = await axios.post(`${baseUrl}/user/create-cot`, userData, {
      headers: {
        Authorization: `Bearer ${userAuthToken}`,
      },
    });
    console.log(response, "from response update request");
    return response;
  } catch (err) {
    console.log("The error", err);
  }
};

const transactionService = {
  getTransfers,
  createTransfer,
  getSingleTransfer,
  sendOtp,
  sendCot,
  verifyCot,
  verifyOtp,
};

export default transactionService;
