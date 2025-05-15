export const Button = ({
  children,
  onClick,
  highlighted = false,
  disabled = false,
}) => (
  <button
    type="button"
    disabled={disabled}
    className={`generic-ui-button ${highlighted && "highlighted"}`}
    onClick={onClick}
  >
    {children}
  </button>
);
