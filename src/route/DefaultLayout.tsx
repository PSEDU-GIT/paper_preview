import { Outlet } from "react-router-dom";
import * as styles from "./DefaultLayout.css.ts";

export default function DefaultLayout() {
  return (
    <main className={styles.container}>
      <div className={styles.body}>
        <div className={styles.overflow}>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
