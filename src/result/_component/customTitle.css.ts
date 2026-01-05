import { style } from "@vanilla-extract/css";
import { TITLE_HEIGHT } from "../_state/useHeight.ts";

export const title = style({
  fontSize: 20,
  color: "#999",
  fontWeight: 600,
  paddingBottom: 3,
  fontFamily: "Pretendard Variable !important",
  height: TITLE_HEIGHT,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const code = style({
  fontSize: 14,
  color: "#aaa",
});
