import { Link } from 'umi';

import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
      <Link to="/a">To view a</Link>
      <br />
      <Link to="/b">To view b</Link>
    </div>
  );
}
