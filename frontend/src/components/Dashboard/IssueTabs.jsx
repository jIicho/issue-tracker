import styles from "./IssueTable.module.css";
import checkBoxInitialIcon from "../../assets/icons/checkBoxInitial.svg";

// 탭 스타일 유틸 함수 (같이 분리하거나 별도 유틸로 분리 가능)
const getStyleTab = (state, isOpen) => {
  return state === isOpen ? `${styles.selectedTab}` : ``;
};

function IssueViewControls({ isOpen, setIsOpen, issueCount }) {
  return (
    <div className={styles.IssueViewControls}>
      <button>
        <img src={checkBoxInitialIcon} alt="checkbox" />
      </button>
      <div className={styles.issueTabs}>
        <button
          className={`${getStyleTab(true, isOpen)} ${styles.tabButton}`}
          onClick={() => setIsOpen(true)}
        >
          <div className={styles.openIssueIcon}></div>
          열린 이슈({issueCount.open_count})
        </button>
        <button
          className={`${getStyleTab(false, isOpen)} ${styles.tabButton}`}
          onClick={() => setIsOpen(false)}
        >
          <div className={styles.closedIssueIcon}></div>
          닫힌 이슈({issueCount.closed_count})
        </button>
      </div>
    </div>
  );
}

export default IssueViewControls;
