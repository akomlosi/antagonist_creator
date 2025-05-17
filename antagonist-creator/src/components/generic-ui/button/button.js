import styles from "./button.module.css";

export const Button = ({
  children,
  onClick,
  highlighted = false,
  disabled = false,
  title = "",
  className = "",
}) => (
  <button
    {...(title && { title })}
    type="button"
    disabled={disabled}
    className={`${styles.button} ${
      highlighted && styles.highlighted
    } ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
