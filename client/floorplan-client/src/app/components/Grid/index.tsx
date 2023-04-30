import styles from './index.module.scss';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Grid({ children }: Props) {
  return <div className={styles.grid}>{children}</div>;
}
