import { useEffect, useMemo } from "react";
import MathJaxListTemplate from "../_template/MathJaxListTemplate";
import { useStore } from "../../state.ts";
import type { MathJaxHeightTypes } from "./MathJaxListAction.tsx";
import { DEFAULT_EXAM_WIDTH } from "../index.css.ts";

export default function QuestionHeightAction() {
  const { fetchData, setHeightQuestion } = useStore();

  const data = useMemo(() => {
    if (fetchData.list.length === 0) return [];

    return fetchData.list.map((datum) => {
      return {
        code: datum.code,
        content: datum.content,
      };
    });
  }, [fetchData]);

  const onTrackableHeight = (height: MathJaxHeightTypes[]) => {
    setHeightQuestion(height);
  };

  useEffect(() => {
    return () => setHeightQuestion([]);
  }, []);

  return (
    <MathJaxListTemplate
      data={data}
      width={DEFAULT_EXAM_WIDTH}
      onTrackable={onTrackableHeight}
    />
  );
}
