export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-gray-200 p-4 text-2xl rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}