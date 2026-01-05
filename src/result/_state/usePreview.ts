import { useLoad } from "./useLoad.ts";
import { useHeight } from "./useHeight.ts";
import { useStore } from "../../state.ts";
import { useEffect } from "react";

export const usePreview = () => {
  const { setResultData, setResultHeight } = useStore();

  useLoad();
  useHeight();

  useEffect(() => {
    return () => {
      setResultData("", []);
      setResultHeight([], []);
    };
  }, [setResultData, setResultHeight]);
};
