import styles from './index.module.scss';

export function Footer() {
  const date: number = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}></div>
      <div className={styles.copyright}>
        © {date} AI Hackathon. All Rights Reserved.
      </div>
    </footer>
  );
}
