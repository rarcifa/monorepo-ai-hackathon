import styles from './index.module.scss';
import classnames from 'classnames';

const cx = classnames.bind(styles);

interface Props {
  children: JSX.Element | JSX.Element[];
  centered?: boolean;
}

export function Wrapper({ children, centered }: Props) {
  return (
    <div className={cx(styles.wrapper, { [styles.centerAlign]: centered })}>
      {children}
    </div>
  );
}
