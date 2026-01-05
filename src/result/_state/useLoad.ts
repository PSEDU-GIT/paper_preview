import { useEffect, useMemo } from "react";
import { useIndexedDB } from "../../_state/useIndexedDB";
import { useSearchParams } from "react-router-dom";
import { useStore } from "../../state.ts";
import type { ResultExamTypes } from "../../types/exam.ts";

export const useLoad = () => {
  const [searchParams] = useSearchParams();

  const { setResultData } = useStore();

  const { data: inData } = useIndexedDB({
    dbName: "database",
    storeName: "result",
  });

  const examData = useMemo(() => {
    if (inData.length === 0) return [];

    return inData[0] as ResultExamTypes[];
  }, [inData]);

  useEffect(() => {
    const subject = searchParams.get("subject") ?? "시험지";

    setResultData(subject, examData);
  }, [examData, searchParams]);
};
