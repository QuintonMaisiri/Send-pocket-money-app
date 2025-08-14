export default function Select({
  options,
  className,
  required,
  label,
  placeholder,
}: SelectProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={placeholder}>{label}</label>
      <select
        className={`bg-gray-100 text-secondary font-black text-xl p-4 rounded-xl w-full focus:outline-none focus:ring-0 ${className}`}
        required={required}
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export type SelectProps = {
  options: { value: string; label: string }[];
  className?: string;
  required?: boolean;
  label: string;
  placeholder: string;
};
