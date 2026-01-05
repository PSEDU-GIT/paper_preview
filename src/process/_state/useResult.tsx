import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIndexedDB } from "../../_state/useIndexedDB";
import { useStore } from "../../state.ts";
import type { ResultExamTypes } from "../../types/exam.ts";

export const useResult = () => {
  const navigate = useNavigate();

  const { fetchData, height } = useStore();

  const { addItem, removeAll } = useIndexedDB({
    dbName: "database",
    storeName: "result",
  });

  useEffect(() => {
    if (
      height.question.length === 0 ||
      height.answer.length === 0 ||
      fetchData.list.length * 2 > height.question.length + height.answer.length
    )
      return;

    const nExam: ResultExamTypes[] = fetchData.list.map((datum, index) => {
      const answerHeight = height.answer.find(
        (sDatum) => sDatum.code === datum.code,
      )!;
      const questionHeight = height.question.find(
        (sDatum) => sDatum.code === datum.code,
      )!;

      const answerElementData =
        answerHeight.element?.map((el) => el.outerHTML) ?? [];
      const questionElementData =
        questionHeight.element?.map((el) => el.outerHTML) ?? [];

      return {
        code: datum.code,
        num: datum.num ?? index + 1,
        questionExam: {
          height: questionHeight.height.reduce((curr, next) => curr + next, 0),
          subHeight: questionHeight.height,
          content: datum.content,
          element: questionElementData,
        },
        answerExam: {
          height: answerHeight.height.reduce((curr, next) => curr + next, 0),
          subHeight: answerHeight.height,
          content: datum.answerContent,
          element: answerElementData,
        },
      };
    });

    removeAll().then(() => {
      addItem(nExam).then(() => {
        navigate(`/result?subject=${fetchData.subject}`, { replace: true });
      });
    });
  }, [height]);
};
