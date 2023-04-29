import styles from './index.module.scss';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Container({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
