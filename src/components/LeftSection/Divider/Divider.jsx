import styles from './Divider.css';

export default function Divider() {
  return (
    <div className={styles.divider}>
      <div className={styles.circle}></div>
      <div className={styles.hLine}>
        <hr />
      </div>
      <div className={styles.circle}></div>
    </div>
  );
}
