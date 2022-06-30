import { tools, languages } from '../languages';
import styles from '../LeftSection.css';

export default function LeftStack() {
  return (
    <div className={styles.column}>
      <div>
        <h3 className={styles.lightSmallCapsItalic}>languages</h3>
        <ul role="list">
          {languages.map((lang) => {
            return <li>&nbsp;&nbsp;&nbsp;{lang}</li>;
          })}
        </ul>
      </div>
      <div className={styles.spacer}>
        <h3 className={styles.lightSmallCapsItalic}>tools</h3>
        <ul role="list">
          {tools.map((tool) => {
            return <li>&nbsp;{tool}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
