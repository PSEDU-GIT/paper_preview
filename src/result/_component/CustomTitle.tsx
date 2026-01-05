import * as styles from "./customTitle.css";

type Props = {
  num: number;
  code?: string;
};

export default function CustomTitle({ num, code }: Props) {
  return (
    <div className={styles.title}>
      {num}
      <p className={styles.code}>{code}</p>
    </div>
  );
}
