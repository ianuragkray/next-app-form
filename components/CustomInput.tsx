interface CustomInputProps {
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomInput = ({ type, label, value, onChange, placeholder }: CustomInputProps) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)} 
          placeholder={placeholder}
          className="w-full p-2 border rounded"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)} 
          placeholder={placeholder}
          className="w-full p-2 border rounded"
        />
      )}
    </div>
  );
};

export default CustomInput;
