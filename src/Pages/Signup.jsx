import React, { useContext, useState } from 'react';
import InputField from '../Components/InputField';
import FormLayout from '../Components/FormLayout';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { AuthContext } from '../Authentications/AuthContext';
import assets from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate=useNavigate();
  const { handleRegister, error, isLoading, user  } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Effect to handle redirection
  // Determine button text based on error state
  const btnText = (error === "The email has already been taken.") || (user !== null) ? "Verify Account" : "Register";

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    handleRegister({ email, username, password, password_confirmation: confirmPassword });
alert(user)
  };

  // Handler for OTP resend
  const handleVerification = (e) => {
    e.preventDefault();
    navigate(`/verify-otp?email=${email}&fromSignUp=true`);
alert(user)
alert(user?.data?.user?.otp)
  };

  return (
    <div className="h-screen flex justify-center md:items-center">
      <div className="flex justify-center items-stretch h-max w-full max-w-4xl">
        <FormLayout 
          title="Sign up" 
          subtitle="If you already have an account" 
          linkText="Login here!" 
          linkHref="/login" 
          buttonText={btnText}
          formFunction={btnText === "Verify Account" ? handleVerification : handleSubmit}
        >
          <div role="alert" aria-live="assertive" className={`${error ? 'text-red-600' : 'text-green-700'} font-medium text-sm p-1`}> 
            {isLoading ? 'Loading...' : (error || (user && user.message))}
          </div>
        <div className={`${btnText !== "Register" 
 ? 'hidden': 'block'}`}>
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
</div>
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
