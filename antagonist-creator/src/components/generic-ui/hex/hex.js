export const Hex = ({ num, className, children }) => (
  <div className={`hex-wrapper ${className}`}>
    <span className="title">{children}</span>
    <svg viewBox="0 0 100 95" className="hex-svg">
      <polygon
        points="50,0 100,25 100,75 50,100 0,75 0,25"
        fill="none"
        stroke="#59b3b7"
        strokeWidth="3"
      />
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle">
        {num}
      </text>
    </svg>
  </div>
);
