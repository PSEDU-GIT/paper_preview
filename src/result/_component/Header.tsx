import * as styles from "./header.css";

interface HeaderProps {
  subject: string;
}

export default function Header({ subject }: HeaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.subject}>
        <p>{subject}</p>
      </div>
    </div>
  );
}
