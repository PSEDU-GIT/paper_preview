import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",

  margin: 0,
  padding: 0,
});

export const body = style({
  flexGrow: 1,
  position: "relative",
});

export const overflow = style({
  position: "absolute",
  inset: 0,
});
