import React, { useContext, useState } from "react";
import InputField from "../Components/InputField";
import FormLayout from "../Components/FormLayout";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AuthContext } from "../Authentications/AuthContext";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { handleLogin, error, isLoading, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const btnText =
    error === "Please verify your email before logging in."
      ? "Verify Account"
      : "Login";
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };
  if (user !== null) {
    setTimeout(() => {
      navigate("/user");
    }, 1000);
  }else{
alert(error)
}

  const handleVerification = (e) => {
    e.preventDefault();
    navigate(
      `/verify-otp?email=${email}&fromSignUp=true&otp=${
        user !== null ? "1234" : ""
      }`
    );
  };

  return (
    <div className="h-screen flex justify-center md:items-center">
      <div className="flex justify-center items-stretch h-max w-full max-w-4xl">
        <FormLayout
          title="Sign in"
          subtitle="If you don’t have an account"
          linkText="Register here!"
          linkHref="/signup"
          buttonText={btnText}
          formFunction={
            btnText === "Verify Account" ? handleVerification : handleSubmit
          }
        >
          <div
            role="alert"
            aria-live="assertive"
            className={`${error !== null && "text-red-600"} ${
              (isLoading || user) && "text-green-700"
            } font-medium text-sm p-1`}
          >
            {" "}
            {(isLoading && "Loading...") ||
              (error !== null && error) ||
              (user !== null && user.message)}
          </div>
          <div className={btnText !== "Login" ? "hidden" : "block"}>
            <InputField
              label="Email"
              type="email"
              icon={
                <FaEnvelope
                  stroke="currentColor"
                  className="absolute bottom-0 top-0 m-auto"
                />
              }
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              icon={
                <FaLock className="stroke-current absolute bottom-0 top-0 m-auto" />
              }
              placeholder="Enter your password"
              minLength="6"
              value={password}
              require
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="/" className="text-sm text-blue-800">
              Forgot password?
            </a>
          </div>
        </FormLayout>

        <div className="flex-grow min-h-full max-w-md w-1/2 bg-blue-800 text-white flex-col items-center justify-center px-8 hidden md:flex rounded-md">
          <div>
            <img
              className="my-5 h-[250px]"
              src={assets.loginImg}
              alt="register"
            />
            <h2 className="text-sm font-bold w-max">
              Place Your Bets with Confidence.
            </h2>
            <p className="mt-4 text-xs text-gray-300">
              Predict.ifSports empowers you to bet smart and confidently by
              delivering the right information at the right time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
