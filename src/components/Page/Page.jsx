import styles from "./Page.module.css";

export const Page = ({ background, className = "", children }) => {
  return (
    <main
      className={`${styles.page} ${className}`}
      style={{ "--page-bg": `url(${background})` }}
    >
      {children}
    </main>
  );
};
