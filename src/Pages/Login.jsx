import React, { useContext, useState } from 'react';
import InputField from '../Components/InputField';
import FormLayout from '../Components/FormLayout';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { AuthContext } from '../Authentications/AuthContext';

const Login = () => {
  const { handleLogin, error } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex justify-center h-max w-full max-w-4xl">
        <FormLayout 
          title="Sign in" 
          subtitle="If you don’t have an account" 
          linkText="Register here!" 
          linkHref="/signup" 
          buttonText="Login"
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
            label="Password" 
            type="password" 
            icon={<FaLock className='stroke-current absolute bottom-0 top-0 m-auto' />}
            placeholder="Enter your password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="/" className="text-sm text-blue-800">Forgot password?</a>
          </div>
        </FormLayout>

        <div className="flex-grow self-stretch max-w-md w-1/2 bg-blue-800 text-white items-center justify-center p-8 hidden md:flex rounded-md">
          <div>
            <h2 className="text-3xl font-bold">Place Your Bets with Confidence.</h2>
            <p className="mt-4 text-lg">
              Predict.ifSports empowers you to bet smart and confidently by delivering the right information at the right time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
