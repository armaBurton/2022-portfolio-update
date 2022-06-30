import { database, libraries, testing } from '../languages';
import styles from '../LeftSection.css';

export default function RightStack() {
  return (
    <div className={styles.column}>
      <div>
        <h3 className={styles.lightSmallCapsItalic}>database</h3>
        <ul role="list">
          {database.map((data) => {
            return <li>&nbsp;&nbsp;&nbsp;{data}</li>;
          })}
        </ul>
      </div>
      <div className={styles.spacer}>
        <h3 className={styles.lightSmallCapsItalic}>
          libraries/
          <br />
          frameworks
        </h3>
        <ul role="list">
          {libraries.map((lib) => {
            return <li>&nbsp;{lib}</li>;
          })}
        </ul>
      </div>
      <div className={styles.spacer}>
        <h3 className={styles.lightSmallCapsItalic}>testing</h3>
        <ul role="list">
          {testing.map((tests) => {
            return <li>&nbsp;{tests}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
