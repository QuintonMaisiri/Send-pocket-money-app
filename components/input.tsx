export default function Input({
  type,
  placeholder,
  className,
  required,
  label,
  value,
  onChange,
  minLength,
  maxLength
}: InputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={placeholder}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`bg-gray-100 text-secondary font-black text-xl p-4 rounded-xl w-full focus:outline-none focus:ring-0 ${className}`}
        required={required}
        id={placeholder}
        value={value}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        min={type === "number" ? "10" : undefined}
        max={type === "number" ? "1000" : undefined}
      />
    </div>
  );
}
export type InputProps = {
  type: string;
  className?: string;
  required?: boolean;
  label: string;
  placeholder: string;
  value: string;
  minLength?: number;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
