import styles from './Education.css';

export default function Education() {
  return (
    <div className={styles.eduContainer}>
      <h3 className={styles.name}>alchemy code lab</h3>
      <p className={styles.date}>November 2021-June 2022</p>
      <ul className={styles.eduUl}>
        <li className={styles.eduList}>
          &nbsp;1000 Hours of intensive remote Software Engineering Training
        </li>
        <li className={styles.eduList}>
          &nbsp;Multiple week-long remote project sprints focusing on group
          collaboration, TDD, planning, and app deployment
        </li>
      </ul>
      <h3 className={styles.name}>portland state university</h3>
      <p className={styles.date}>September 2012-June 2016</p>
      <p className={styles.degree}>BS Graphic Design</p>
    </div>
  );
}
