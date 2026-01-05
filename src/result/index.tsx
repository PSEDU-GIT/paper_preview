import { usePreview } from "./_state/usePreview.ts";
import * as styles from "./index.css.ts";
import CustomQuestionListAction from "./_action/CustomQuestionListAction.tsx";
import CustomAnswerListAction from "./_action/CustomAnswerListAction.tsx";

export default function ResultScreen() {
  usePreview();

  return (
    <section className={styles.container}>
      <div className={styles.layer}>
        <CustomQuestionListAction />
      </div>
      <div className={styles.layer}>
        <CustomAnswerListAction />
      </div>
    </section>
  );
}
