export default function Button({ text ,className = "", onClick }: {
  text: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button className={`bg-primary text-white py-3 px-6 rounded ${className} cursor-pointer`} onClick={onClick}>
      {text}
    </button>
    )
}