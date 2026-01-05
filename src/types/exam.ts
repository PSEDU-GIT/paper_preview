export enum ExamQdQLevelEnum {
  "최상" = "1",
  "상" = "2",
  "중상" = "3",
  "중" = "4",
  "중하" = "5",
  "하" = "6",
}

export enum ExamQdTypeEnum {
  "객관식" = "01",
  "주관식" = "02",
  "서술형" = "03",
}

export type ExamTypes = {
  code: string;
  num?: number;
  content: string;
  answerContent: string;
};

export type ResultExamTypes = {
  code: string;
  num: number;
  answerExam: {
    height: number;
    subHeight: number[];
    content: string;
    element: string[];
  };
  questionExam: {
    height: number;
    subHeight: number[];
    content: string;
    element: string[];
  };
};
