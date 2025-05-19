interface FormDataPageProps {
    searchParams: {
      fullname?: string;
      email?: string;
      age?: string;
      gender?: string;
      description?: string;
    };
  }
  
  const FormDataPage = ({ searchParams }: FormDataPageProps) => {
    const { fullname, email, age, gender, description } = searchParams;
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-6 shadow-md rounded-md w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Submitted Data</h1>
          <div className="space-y-2">
            <p><strong>Fullname:</strong> {fullname || "Not provided"}</p>
            <p><strong>Email:</strong> {email || "Not provided"}</p>
            <p><strong>Age:</strong> {age || "Not provided"}</p>
            <p><strong>Gender:</strong> {gender || "Not provided"}</p>
            <p><strong>Description:</strong> {description || "Not provided"}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FormDataPage;
  