import React from "react";
import assets from "../assets/assets";
const FormLayout = ({
  children,
  title,
  subtitle,
  linkText,
  linkHref,
  buttonText,
  formFunction,
  autocomplete,
}) => {
  return (
    <div className="w-96 bg-white p-8 md:flex-grow md:w-1/2">
      <div>
        <img
          src={assets.logo}
          alt="predict.ifSports"
          className="self-start h-20"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4">{title && title}</h2>
      <p className="mb-6 text-sm">
        {subtitle && subtitle}{" "}
        <a href={linkHref && linkHref} className="text-blue-800 font-bold">
          {linkText}
        </a>
      </p>

      <form
        onSubmit={formFunction && formFunction}
        autoComplete={autocomplete && autocomplete}
      >
        {children}
        <button className="rounded-3xl w-full bg-blue-800 text-white py-2 hover:bg-blue-700 mt-4">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default FormLayout;
