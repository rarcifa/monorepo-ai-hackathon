import styles from './index.module.scss';
import classnames from 'classnames';

const cx = classnames.bind(styles);

interface Props {
  children: string;
  active?: boolean;
}

export function Button({ children, active }: Props) {
  return (
    <span className={cx(styles.button, { [styles.active]: active })}>
      {children}
    </span>
  );
}
