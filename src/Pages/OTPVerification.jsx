import FormLayout from '../Components/FormLayout';
import {useLocation} from 'react-router-dom'
import { AuthContext } from '../Authentications/AuthContext';
import assets from '../assets/assets'
import { useContext, useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OTPVerification = () => {
const navigate= useNavigate();

  const [searchParams]= useSearchParams()
  const sentMail=searchParams.get('email');
const fromSignup= searchParams.get('fromSignUp');
  const { handleOTP, handleResendOTP, error, isLoading, user} = useContext(AuthContext);
const [minutes, setMinutes] = useState(2);
const [seconds, setSeconds] = useState(39);
  const [otp, setOtp] = useState(new Array(4).fill(null));

if(!fromSignup){
   navigate("/login");
}else{
setSeconds(0);
setMinutes(0);
}
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
  
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

  const handleKeyDown=(e, index)=>{
    if(e.key === 'Backspace' || e.key === 'Delete'){
      setOtp([...otp.map((d, idx) => (idx === index ? e.target.value : d))]);  
      if(e.target.value === "" && index >=1){
        if (e.target.previousSibling) {
          
          e.target.previousSibling.focus();
          e.target.previousSibling.value="";
          setOtp([...otp.map((d, idx) => (idx === index-1 ? e.target.value : d))]);
        }else{
          e.target.value="";
        }
      }
    }
  }
  const handleReviewOTP = (e) => {
    e.preventDefault();
    handleResendOTP({ sentMail });
    setMinutes(2);
    setSeconds(39);
  };
  const handleChange = (element, index) => {
    if (isNaN(element.value)){ 
      element.value=null
      return false 
    };

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    
    // Focus on next input box
    if (element.nextSibling) {
      element.nextSibling.focus();

      element.nextSibling.select();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   if(user !== null){
    
    handleOTP({  sentMail , otp: otp.join("") });
   }
  };

  return (
    <div className="h-screen flex justify-center md:items-center">
      <div className="flex justify-center items-stretch h-max w-full max-w-4xl">
        <div>
        <FormLayout 
          autocomplete="off"
          title="OTP Verification" 
          subtitle={`We sent a code to ${sentMail}`}
          buttonText="Login"
          formFunction={handleSubmit}
        >
          <div role="alert" aria-live="assertive" className={`${error !== null ? 'text-red-600': 'text-green-700'} font-medium text-sm p-1`}> {(isLoading&&'Loading...' )|| (error !== null &&error )|| (user !== null && user)}</div>
          <div className="w-[80%] mx-auto flex justify-between gap-1 mt-6">
          {otp.map((data, index) => (
            <input
              className="w-12 h-12 border-b-2 border-b-gray-700 focus:outline-none focus:border-b-blue-900 text-center text-2xl transition-all duration-400 ease-in-out"
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onInput={e => handleChange(e.target, index)}
              onKeyDown={e => handleKeyDown(e, index)}
              onFocus={e => e.target.select()}
            />
          ))}
        </div>
        <p className='w-[80%] mx-auto text-xs text-blue-700'>({minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds})</p>
        {
         <p className={`text-xs text-gray-400 ${( seconds === 0 && minutes === 0)&& 'text-gray-700'}`}>Didn't get a code ? <span onClick={( seconds === 0 && minutes === 0)&& handleReviewOTP} className={( seconds === 0 && minutes === 0)&& 'text-gray-900 font-bold cursor-pointer'}>Resend</span></p>
        }
        </FormLayout>
        
        </div>


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

export default OTPVerification;