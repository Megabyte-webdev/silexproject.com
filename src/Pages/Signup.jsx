import React, { useContext, useState } from 'react';
import InputField from '../Components/InputField';
import FormLayout from '../Components/FormLayout';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { AuthContext } from '../Authentications/AuthContext';
import assets from '../assets/assets'

const Signup = () => {
  const { handleRegister, error } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ email, username, password, password_confirmation: confirmPassword });
  };


  return (
    <div className="h-screen flex justify-center md:items-center">
      <div className="flex justify-center items-stretch h-max w-full max-w-4xl">
        <FormLayout 
          title="Sign up" 
          subtitle="If you already have an account" 
          linkText="Login here!" 
          linkHref="/login" 
          buttonText="Register"
          formFunction={handleSubmit}
        >
          <div className='text-red-600 text-sm p-1'>{error}</div>
          <InputField 
            label="Email" 
            type="email" 
            icon={<FaEnvelope stroke='currentColor' className='absolute bottom-0 top-0 m-auto' />} 
            placeholder="Enter your email address"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <InputField 
            label="Username"
            icon={<FaUser stroke='currentColor' className='absolute bottom-0 top-0 m-auto' />} 
            type="text" 
            placeholder="Enter your user name"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <InputField 
            label="Password" 
            type="password"
            icon={<FaLock stroke='currentColor' className='absolute bottom-0 top-0 m-auto' />} 
            placeholder="Enter your password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <InputField 
            label="Confirm Password" 
            type="password" 
            icon={<FaLock stroke='currentColor' className='absolute bottom-0 top-0 m-auto' />} 
            placeholder="Confirm your password"
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </FormLayout>

        <div className="flex-grow min-h-full max-w-md w-1/2 bg-blue-800 text-white flex-col items-center justify-center px-8 hidden md:flex rounded-md">
          <div>
            <img className='my-5 h-[250px]' src={assets.loginImg} alt="register" />
            <h2 className="text-sm font-bold w-max">Place Your Bets with Confidence.</h2>
            <p className="mt-4 text-xs text-gray-300">
              Predict.ifSports empowers you to bet smart and confidently by delivering the right information at the right time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
