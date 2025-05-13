import styles from "./IssueTabButton.module.css";

function IssueTabButton({ isActive, onClick, iconClassName, label }) {
  return (
    <button
      className={`${isActive ? styles.selectedTab : ""} ${styles.tabButton}`}
      onClick={onClick}
    >
      <div className={styles[iconClassName]}></div>
      <span>{label}</span>
    </button>
  );
}

export default IssueTabButton;
