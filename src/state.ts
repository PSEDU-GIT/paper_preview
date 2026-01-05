import type { ExamTypes, ResultExamTypes } from "./types/exam.ts";
import { create } from "zustand/react";
import type { MathJaxHeightTypes } from "./process/_action/MathJaxListAction.tsx";

type State = {
  fetchData: {
    subject: string;
    list: ExamTypes[];
  };

  height: {
    question: MathJaxHeightTypes[];
    answer: MathJaxHeightTypes[];
  };

  resultData: {
    subject: string;
    list: ResultExamTypes[];
  };
  resultHeight: {
    question: number[];
    answer: number[];
  };
};

type Action = {
  setFetchData: (subject: string, list: ExamTypes[]) => void;

  setHeightQuestion: (question: MathJaxHeightTypes[]) => void;
  setHeightAnswer: (answer: MathJaxHeightTypes[]) => void;

  setResultData: (subject: string, list: ResultExamTypes[]) => void;
  setResultHeight: (question: number[], answer: number[]) => void;
};

export const useStore = create<State & Action>((set) => ({
  fetchData: {
    subject: "",
    list: [],
  },
  height: {
    question: [],
    answer: [],
  },
  resultData: {
    subject: "",
    list: [],
  },
  resultHeight: {
    question: [],
    answer: [],
  },

  setFetchData: (subject, list) => set({ fetchData: { subject, list } }),
  setHeightQuestion: (question) =>
    set(({ height }) => ({
      height: { ...height, question },
    })),
  setHeightAnswer: (answer) =>
    set(({ height }) => ({
      height: { ...height, answer },
    })),
  setResultData: (subject, list) => set({ resultData: { subject, list } }),
  setResultHeight: (question, answer) =>
    set({ resultHeight: { question, answer } }),
}));
