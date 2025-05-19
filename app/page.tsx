"use client";
import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomInput from "../components/CustomInput";
import CustomDropdown from "../components/CustomDropdown";
import CustomButton from "../components/CustomButton";
import { useRouter } from "next/navigation";

const FormPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
       // Validation check
       if (!fullname || !email || !age || !gender || !description) {
        toast.error("All fields are required!");
        return;
      }
    const queryParams = new URLSearchParams({
      fullname,
      email,
      age,
      gender,
      description,
    }).toString();

    toast.success("Form submitted successfully!");
    toast.info("Redirecting to the next page...");
    setTimeout(() => {
      router.push(`/form-data?${queryParams}`);
    }
    , 4000);
  };

  const handleReset = () => {
    setFullname("");
    setEmail("");
    setAge("");
    setGender("");
    setDescription("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Feedback Form</h1>
        <form onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            label="Fullname"
            value={fullname}
            onChange={(value) => setFullname(value as string)}
            placeholder="Enter your Fullname"
          />
          <CustomInput
            type="email"
            label="Email"
            value={email}
            onChange={(value) => setEmail(value as string)}
            placeholder="Enter your email"
          />
          <CustomInput
            type="number"
            label="Age"
            value={age}
            onChange={(value) => setAge(value.toString())}
            placeholder="Enter your age"
          />
          <CustomDropdown
            label="Gender"
            options={["Male", "Female", "Other"]}
            value={gender}
            onChange={setGender}
          />
          <CustomInput
            type="textarea"
            label="Description"
            value={description}
            onChange={(value) => setDescription(value as string)}
            placeholder="Enter a description"
          />
          <div className="flex space-x-4 mt-4">
            <CustomButton type="submit" label="Submit" />
            <CustomButton type="reset" label="Reset" onClick={handleReset} />
          </div>
        </form>
        <ToastContainer position="top-center"/>
      </div>
    </div>
  );
};

export default FormPage;