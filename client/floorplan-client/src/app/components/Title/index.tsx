import { EHeading } from 'app/types';
import styles from './index.module.scss';
import classnames from 'classnames';

const cx = classnames.bind(styles);

interface Props {
  children: string;
  centered?: boolean;
  Tag: EHeading;
}

export function Title({ children, centered, Tag }: Props) {
  return (
    <Tag className={cx(styles.title, { [styles.centerAlign]: centered })}>
      {children}
    </Tag>
  );
}
