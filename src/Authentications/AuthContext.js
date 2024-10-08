import { createContext, useState } from "react";
import { login, register, verifyOtp, resendOTP } from "./AuthService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async (userData) => {
    try {
      setIsLoading(true);
      const data = await register(userData);
      setUser(data);
      setIsLoading(false);
      setError(null); // Clear error on success
    } catch (err) {
      setIsLoading(false);
        setError(err.response?.data?.message || "Registeration failed");
      
    }
  };

  const handleLogin = async (credentials) => {
    try {
      setIsLoading(true);
      const data = await login(credentials);
      setIsLoading(false);
      setUser(data);
      setError(null); // Clear error on success
    } catch (err) {
      setIsLoading(false);
      setIsLoading(false);
        setError(err.response?.data?.message || err.response?.data?.data || "Login failed");
      
    }
  };

  const handleOTP = async (credentials) => {
    try {
      setIsLoading(true);
      const data = await verifyOtp(credentials);
      setUser(data);
      setIsLoading(false);
      setError(null); // Clear error on success
    } catch (err) {
      setIsLoading(false);
      setIsLoading(false);
        setError(err.response?.data?.message || err.response?.data?.data || "OTP failed");
    }
  };

  const handleResendOTP = async (credentials) => {
    try {
      setIsLoading(true);
      const data = await resendOTP(credentials);
      setUser(data);
      setIsLoading(false);
      setError(null); // Clear error on success
    } catch (err) {
      setIsLoading(false);
      setIsLoading(false);
        setError(err.response?.data?.message || err.response?.data?.data || "OTP failed");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        handleRegister,
        handleLogin,
        handleOTP,
        handleResendOTP,
        setUser,
        user,
        error,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
