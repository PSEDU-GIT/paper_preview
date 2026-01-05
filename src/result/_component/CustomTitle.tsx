import * as styles from "./customTitle.css";

type Props = {
  num: number;
};

export default function CustomTitle({ num }: Props) {
  return <div className={styles.title}>{num}</div>;
}
