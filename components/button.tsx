export default function Button({ text ,className = "" }: {
  text: string;
  className?: string;
}) {
  return (
    <button className={`bg-primary text-white py-3 px-6 rounded ${className}`}>
      {text}
    </button>
    )
}