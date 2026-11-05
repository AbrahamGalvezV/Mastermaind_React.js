import styles from "./Title.module.css";

export const Title = ({ as: Tag = "h1", size = "lg", className = "", children }) => {
  return (
    <Tag className={`${styles.title} ${styles[size]} ${className}`}>
      {children}
    </Tag>
  );
};
