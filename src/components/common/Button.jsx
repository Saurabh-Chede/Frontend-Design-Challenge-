const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full mt-3 bg-cyan-500 text-white py-2 rounded"
  >
    {text}
  </button>
);

export default Button;