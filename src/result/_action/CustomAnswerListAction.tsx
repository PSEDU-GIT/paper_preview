import { type ReactNode, useMemo } from "react";
import CustomTitle from "../_component/CustomTitle";
import PaperListTemplate from "../_template/PaperListTemplate";
import { useStore } from "../../state.ts";
import { v4 as uuidV4 } from "uuid";
import { ANSWER_LAYER_GAP } from "../_state/useHeight.ts";
import Header from "../_component/Header.tsx";

export default function CustomAnswerListAction() {
  const { resultData, resultHeight } = useStore();

  const examElement = useMemo(
    () =>
      resultData.list.reduce((curr, next, index) => {
        const [first, ...rest] = next.answerExam.element.map((datum) => (
          <div key={uuidV4()} dangerouslySetInnerHTML={{ __html: datum }} />
        ));

        return curr.concat([
          <div key={uuidV4()}>
            <CustomTitle num={next.num} />
            {first}
          </div>,
          ...rest,
          <div
            key={uuidV4()}
            style={{
              height:
                index !== resultData.list.length - 1 ? ANSWER_LAYER_GAP : 0,
            }}
          />,
        ]);
      }, [] as ReactNode[]),
    [resultData],
  );

  return (
    <PaperListTemplate
      height={resultHeight.answer}
      header={<Header subject={`(해설) ${resultData.subject}`} />}
    >
      {examElement}
    </PaperListTemplate>
  );
}
