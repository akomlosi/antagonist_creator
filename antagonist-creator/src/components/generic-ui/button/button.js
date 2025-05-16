import styles from "./button.module.css";

export const Button = ({
  children,
  onClick,
  highlighted = false,
  disabled = false,
}) => (
  <button
    type="button"
    disabled={disabled}
    className={`${styles.button} ${highlighted && styles.highlighted}`}
    onClick={onClick}
  >
    {children}
  </button>
);
