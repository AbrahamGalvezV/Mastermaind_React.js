import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import styles from "./BackButton.module.css";

export const BackButton = ({ to, className = "", children = "Volver" }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="sm"
      className={`${styles.back} ${className}`}
      onClick={() => navigate(to)}
      aria-label={children}
    >
      <svg
        className={styles.back__icon}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M15 5l-7 7 7 7" />
      </svg>
      <span className={styles.back__label}>{children}</span>
    </Button>
  );
};
