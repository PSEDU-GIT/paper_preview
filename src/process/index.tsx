import * as styles from "./index.css.ts";
import AnswerHeightAction from "./_action/AnswerHeightAction.tsx";
import QuestionHeightAction from "./_action/QuestionHeightAction.tsx";
import { useResult } from "./_state/useResult.tsx";

export default function ProcessScreen() {
  useResult();

  return (
    <section className={styles.container}>
      <article className={styles.aside}>
        <AnswerHeightAction />
        <QuestionHeightAction />
      </article>
    </section>
  );
}
