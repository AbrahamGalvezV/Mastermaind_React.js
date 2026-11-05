import styles from "./Button.module.css";

export const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
