import styles from "./toggle.module.css";

export default function ToggleIcon({ open }) {
  return (
    <span className={`${styles.toggleIcon} ${open ? styles.open : ""}`}>
      <span className={styles.horizontal}></span>
      <span className={styles.vertical}></span>
    </span>
  );
}