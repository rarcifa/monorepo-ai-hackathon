import styles from './index.module.scss';

type Props = {
  children: string | string[];
  fontWeight?: number;
  fontSize?: number;
  color?: string;
};

export function Typography({ children, fontWeight, fontSize, color }: Props) {
  const css: React.CSSProperties = {
    fontWeight: fontWeight,
    fontSize: fontSize,
    color: color,
  };

  return (
    <div className={styles.typography} style={css}>
      {children}
    </div>
  );
}
