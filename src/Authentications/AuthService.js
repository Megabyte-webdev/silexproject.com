import axios from "axios";

// Replace with your actual API base URL
const BASE_URL = "https://app.predictifsports.com/api";

// Register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, userData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Login user
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Verify OTP
export const verifyOtp = async (otpData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/verify-otp`, otpData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

//resend OTP
export const resendOTP = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/resend-otp`, email);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Forget password
export const forgetPassword = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/forget-password`, {
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Reset password
export const resetPassword = async (resetData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/reset-password`,
      resetData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
