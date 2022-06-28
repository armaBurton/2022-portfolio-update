import styles from './App.css';

export default function App() {
  return (
    <>
      <body>
        <section
          className={styles.portfolioHolder}
          style={{ backgroundColor: 'yellow' }}
        >
          <section className={styles.leftSection}>left</section>
          <section className={styles.rightSection}>right</section>
        </section>
      </body>
    </>
  );
}
