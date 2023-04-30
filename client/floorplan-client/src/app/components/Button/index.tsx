import styles from './index.module.scss';
import classnames from 'classnames';

const cx = classnames.bind(styles);

interface Props {
  children: string;
  active?: boolean;
  onClick: () => void;
}

export function Button({ children, active, onClick }: Props) {
  return (
    <span
      onClick={() => onClick()}
      className={cx(styles.button, { [styles.active]: active })}
    >
      {children}
    </span>
  );
}
