import './App.css';
import Login from './Pages/Login';
import MainPage from './Pages/MainPage';
import Signup from './Pages/Signup';
import OTPVerification from './Pages/OTPVerification';
import NoPageFound from './Pages/NoPageFound'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthContext } from './Authentications/AuthContext';
import UserPage from './Pages/UserPage';
import { useContext } from 'react';
function App() {
  const { user, error } = useContext(AuthContext);
   return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {
          user !== null &&  <Route path='/verify-otp' element={<OTPVerification />} />
        }
        {
          user !== null && <Route path="/user" element={<UserPage />} />
        }
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
