import { useMemo } from "react";
import CustomTitle from "../_component/CustomTitle";
import PaperListTemplate from "../_template/PaperListTemplate";
import { useStore } from "../../state.ts";
import Header from "../_component/Header.tsx";

export default function CustomQuestionListAction() {
  const { resultData, resultHeight } = useStore();

  const examElement = useMemo(() => {
    return resultData.list.map((datum, index) => {
      return (
        <div key={index} style={{ minHeight: resultHeight.question[index] }}>
          <CustomTitle num={index + 1} code={datum.code} />
          {datum.questionExam.element.map((el, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: el }} />
          ))}
        </div>
      );
    });
  }, [resultData, resultHeight.question]);

  return (
    <PaperListTemplate
      height={resultHeight.question}
      header={<Header subject={resultData.subject} />}
    >
      {examElement}
    </PaperListTemplate>
  );
}
