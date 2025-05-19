"use client";

import { useSearchParams } from "next/navigation";

const FormDataClient = () => {
  const searchParams = useSearchParams();

  const fullname = searchParams.get("fullname");
  const email = searchParams.get("email");
  const age = searchParams.get("age");
  const gender = searchParams.get("gender");
  const description = searchParams.get("description");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Form Data</h1>
        <div className="space-y-2">
          <p><strong>Fullname:</strong> {fullname || "N/A"}</p>
          <p><strong>Email:</strong> {email || "N/A"}</p>
          <p><strong>Age:</strong> {age || "N/A"}</p>
          <p><strong>Gender:</strong> {gender || "N/A"}</p>
          <p><strong>Description:</strong> {description || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default FormDataClient;
