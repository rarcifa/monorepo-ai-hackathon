import styles from './index.module.scss';

export function Output(): JSX.Element {
  return (
    <div className={styles.outputContainer}>
      <div className={styles.output} />
    </div>
  );
}
