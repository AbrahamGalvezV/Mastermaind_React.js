import styles from "./Page.module.css";

export const Page = ({
  background,
  centered = false,
  compact = false,
  fit = false,
  className = "",
  children,
}) => {
  return (
    <main
      className={`${styles.page} ${centered ? styles.centered : ""} ${compact ? styles.compact : ""} ${fit ? styles.fit : ""} ${className}`}
      style={{ "--page-bg": `url(${background})` }}
    >
      {children}
    </main>
  );
};
