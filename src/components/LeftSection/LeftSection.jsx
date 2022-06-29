import styles from './LeftSection.css';
import Divider from './Divider/Divider';
import LeftStack from './LeftStack/LeftStack';

export default function leftSection() {
  return (
    <section className={styles.leftSection}>
      <h1 className={styles.name}>Arma Burton</h1>
      <h3 className={styles.title}>software engineer</h3>
      <div className={styles.listContainer}>
        <div className={styles.contactLinkRow}>
          <p className={styles.contactMethod}>github</p>
          <div className={styles.leaderDots}></div>
          <p className={styles.contactLink}>/armaBurton</p>
        </div>
        <div className={styles.contactLinkRow}>
          <p className={styles.contactMethod}>linkedin</p>
          <div className={styles.leaderDots}></div>
          <p className={styles.contactLink1}>/arma-burton</p>
        </div>
        <div className={styles.contactLinkRow}>
          <p className={styles.contactMethod}>email</p>
          <div className={styles.leaderDots}></div>
          <p className={styles.contactLink}>armanarma@armaburton.com</p>
        </div>

        <Divider />

        <h3 className={styles.title}>tech stack</h3>
        <div className={styles.stackContainer}>
          <LeftStack />
          <div className={styles.leftStack}></div>
          <div className={styles.rightStack}></div>
        </div>
      </div>
    </section>
  );
}
