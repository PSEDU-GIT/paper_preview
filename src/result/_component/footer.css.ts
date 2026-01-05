import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: 15,
});

export const pageCount = style({
  color: "#000",
  fontSize: 14,
  position: "absolute",
});
