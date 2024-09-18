import React from "react";
const InputField = ({ icon, label, type, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-900">{label}</label>
      <p className="relative h-full">
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="py-3 px-2 pe-0 ps-8 w-full bg-transparent placeholder-black transition-colors duration-300 p-2"
          style={{ outline: "none", borderBottom: "2px solid #222" }}
        />
      </p>
    </div>
  );
};

export default InputField;
