import styles from './index.module.scss';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>AI Hackathon.</span>
    </nav>
  );
}
