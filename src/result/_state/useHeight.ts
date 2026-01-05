import { useEffect } from "react";
import {
  EXAM_FOOTER_HEIGHT,
  EXAM_HEADER_HEIGHT,
  EXAM_HEIGHT,
} from "../_component/customPaper.css.ts";
import { useStore } from "../../state.ts";

export const ANSWER_LAYER_GAP = 20;
export const DEFAULT_LAYER =
  EXAM_HEIGHT - EXAM_HEADER_HEIGHT - EXAM_FOOTER_HEIGHT - 28 - 2;

export const TITLE_HEIGHT = 26;

export const useHeight = () => {
  const { resultData, setResultHeight } = useStore();

  useEffect(() => {
    if (resultData.list.length === 0) return;

    const result: number[] = resultData.list.map((datum) =>
      Math.max(DEFAULT_LAYER / 2, datum.questionExam.height + TITLE_HEIGHT),
    );
    const answerResult: number[] = [];

    resultData.list.forEach((datum, index) => {
      datum.answerExam.subHeight.forEach((sDatum, sIndex) => {
        if (sIndex === 0) {
          answerResult.push(sDatum + TITLE_HEIGHT);
        } else {
          answerResult.push(sDatum);
        }
      });

      if (index !== resultData.list.length - 1)
        answerResult.push(ANSWER_LAYER_GAP);
    });

    setResultHeight(result, answerResult);
  }, [resultData]);
};
