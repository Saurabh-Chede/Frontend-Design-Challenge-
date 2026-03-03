const colors = {
  low: "bg-green-500",
  medium: "bg-yellow-500",
  high: "bg-red-500"
};

const SeverityBadge = ({ level }) => (
  <span className={`text-white px-2 py-1 rounded ${colors[level]}`}>
    {level}
  </span>
);

export default SeverityBadge;