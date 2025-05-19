"use client";
import React, { useState } from "react";

interface CustomInputProps {
  type: "text" | "email" | "number" | "textarea";
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  customClass?: string;
  errorMessage?: string;
}

const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const CustomInput = ({
  type,
  label,
  value,
  onChange,
  placeholder = "",
  customClass = "",
  errorMessage = "Invalid input",
}: CustomInputProps) => {
  const [inputValue, setInputValue] = useState<string>(String(value ?? ""));
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (type === "email") {
      if (newValue === "" || isValidEmail(newValue)) {
        setError(false);
        onChange(newValue); // Only propagate valid email or empty
      } else if (newValue.length > 3) {
        setError(true); // Just mark error, don't update external value
      }
    } else {
      setError(false);
      onChange(newValue);
    }
  };

  return (
    <div className={`flex flex-col mb-4 ${customClass}`}>
      <label className="mb-2 font-medium text-gray-700">{label}</label>
      {type === "textarea" ? (
        <textarea
          className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
        />
      )}
      {error && <span className="text-red-500 text-sm mt-1">{errorMessage}</span>}
    </div>
  );
};

export default CustomInput;
