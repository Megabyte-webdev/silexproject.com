import { createContext, useState } from 'react';
import { login, register} from './AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async (userData) => {
    try {
      const data = await register(userData);
      setUser(data.user);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  const handleLogin = async (credentials) => {
    try {
      const data = await login(credentials);
      setUser(data.user);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <AuthContext.Provider value={{ user, handleRegister, handleLogin, error }}>
      {children}
    </AuthContext.Provider>
  );
};
