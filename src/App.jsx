import styles from './App.css';
import LeftSection from './components/leftSection/leftSection';

export default function App() {
  return (
    <>
      <body>
        <section
          className={styles.portfolioHolder}
          style={{ backgroundColor: 'yellow' }}
        >
          <LeftSection />
          {/* <section className={styles.leftSection}>left</section> */}
          <section className={styles.rightSection}>right</section>
        </section>
      </body>
    </>
  );
}
