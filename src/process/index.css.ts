import { style } from "@vanilla-extract/css";
import { EXAM_WIDTH } from "../result/_component/customPaper.css.ts";

export const DEFAULT_EXAM_WIDTH = EXAM_WIDTH / 2 - 17 - 57 - 1;

export const container = style({
  display: "flex",
  gap: "20px",
  height: "100%",
  position: "relative",
  background: "#fff",
  alignItems: "center",
  justifyContent: "center",
});

export const aside = style({
  position: "absolute",
});
