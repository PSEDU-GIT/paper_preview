import * as styles from "./footer.css.ts";

export interface FooterProps {
  totalPage: number;
  currPage: number;
}

export default function Footer({ totalPage, currPage }: FooterProps) {
  return (
    <div className={styles.container}>
      <span className={styles.pageCount}>
        {currPage}/{totalPage}
      </span>
    </div>
  );
}
