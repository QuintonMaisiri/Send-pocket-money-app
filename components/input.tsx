export default function Input({
  type,
  placeholder,
  className,
  required,
  label,
}: InputProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={placeholder}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`bg-gray-100 text-secondary font-black text-xl p-4 rounded-xl w-full focus:outline-none focus:ring-0 ${className}`}
        required={required}
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
};
