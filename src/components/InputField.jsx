function InputField({ type = "text", name, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border p-3 rounded-lg"
    />
  );
}

export default InputField;