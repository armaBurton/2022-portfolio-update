import styles from './LeftSection.css';

export default function leftSection() {
  return (
    <section className={styles.leftSection}>
      <h1 className={styles.name}>Arma Burton</h1>
      <h3 className={styles.title}>software engineer</h3>
      <div className={styles.contactLinkContainer}>
        <div className={styles.contactLinkRow}>
          <p className={styles.contactMethod}>github</p>
          <div className={styles.leaderDots}></div>
          <p className={styles.contactLink}>/armaBurton</p>
        </div>
      </div>
    </section>
  );
}
