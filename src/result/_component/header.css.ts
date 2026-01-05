import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const subject = style({
  color: "#000",
  fontSize: 24,
  fontWeight: 600,
  lineHeight: "20px",
  wordBreak: "keep-all",
  position: "absolute",
  padding: "0 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 5,
  gap: 6,
});
