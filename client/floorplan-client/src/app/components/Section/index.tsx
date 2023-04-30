import styles from './index.module.scss';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Section({ children }: Props) {
  return <section className={styles.section}>{children}</section>;
}
