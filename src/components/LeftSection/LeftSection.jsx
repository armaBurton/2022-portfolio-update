import styles from './LeftSection.css';
import Divider from './Divider/Divider';
import LeftStack from './LeftStack/LeftStack';
import RightStack from './RightStack/RightStack';
import Education from './Education/Education';

export default function leftSection() {
  return (
    <section className={styles.leftSection}>
      <h1 className={styles.name}>Arma Burton</h1>
      <h3 className={styles.title}>software engineer</h3>
      <div className={styles.listContainer}>
        <div className={styles.contactLinkRow}>
          <p className={styles.lightSmallCapsItalic}>github</p>
          <div className={styles.leaderDots}></div>
          <p className={styles.contactLink}>/armaBurton</p>
        </div>
        <div className={styles.contactLinkRow}>
          <p className={styles.lightSmallCapsItalic}>linkedin</p>
          <div className={styles.leaderDots}></div>
          <p className={styles.contactLink1}>/arma-burton</p>
        </div>
        <div className={styles.contactLinkRow}>
          <p className={styles.lightSmallCapsItalic}>email</p>
          <div className={styles.leaderDots}></div>
          <p className={styles.contactLink}>armanarma@armaburton.com</p>
        </div>

        <Divider />

        <h3 className={styles.title}>tech stack</h3>
        <div className={styles.stackContainer}>
          <LeftStack />
          <RightStack />
          {/* <div className={styles.leftStack}></div> */}
        </div>

        <Divider />

        <div className={styles.title}>education</div>
        <Education />
      </div>
    </section>
  );
}
