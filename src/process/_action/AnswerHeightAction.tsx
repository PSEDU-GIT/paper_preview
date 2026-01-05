import { useEffect, useMemo } from "react";
import MathJaxListTemplate from "../_template/MathJaxListTemplate";
import { DEFAULT_EXAM_WIDTH } from "../index.css.ts";
import { useStore } from "../../state.ts";
import type { MathJaxHeightTypes } from "./MathJaxListAction.tsx";

export default function AnswerHeightAction() {
  const { fetchData, setHeightAnswer } = useStore();

  const data = useMemo(() => {
    if (fetchData.list.length === 0) return [];

    return fetchData.list.map((datum) => {
      return {
        code: datum.code,
        content: datum.answerContent,
      };
    });
  }, [fetchData]);

  const onTrackableHeight = (height: MathJaxHeightTypes[]) => {
    setHeightAnswer(height);
  };

  useEffect(() => {
    return () => setHeightAnswer([]);
  }, []);

  return (
    <MathJaxListTemplate
      data={data}
      width={DEFAULT_EXAM_WIDTH}
      onTrackable={onTrackableHeight}
    />
  );
}
