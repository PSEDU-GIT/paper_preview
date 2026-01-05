import { style } from "@vanilla-extract/css";

export const EXAM_WIDTH = 794;
export const EXAM_HEIGHT = 794 * 1.414;
export const EXAM_HEADER_HEIGHT = 100;
export const EXAM_FOOTER_HEIGHT = 60;

export const paperRegion = style({
  width: EXAM_WIDTH,
  minWidth: EXAM_WIDTH,
  height: EXAM_HEIGHT,
  minHeight: EXAM_HEIGHT,
});

export const article = style([
  paperRegion,
  {
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    border: " 1px solid #ddd",
    position: "relative",
    breakAfter: "page",

    "@media": {
      print: {
        border: "none",
      },
    },
  },
]);

export const header = style({
  width: "100%",
  minHeight: EXAM_HEADER_HEIGHT,
  height: EXAM_HEADER_HEIGHT,
});

export const footer = style({
  width: "100%",
  minHeight: EXAM_FOOTER_HEIGHT,
  height: EXAM_FOOTER_HEIGHT,
});

export const body = style({
  display: "grid",
  width: "100% !important",
  gridTemplateColumns: `calc(50% - 1px) 2px calc(50% - 1px)`,
  position: "relative",
  height: EXAM_HEIGHT - EXAM_HEADER_HEIGHT - EXAM_FOOTER_HEIGHT,
});

export const bodyLayer = style({
  padding: "14px 17px",

  selectors: {
    "&.left": {
      paddingLeft: 57,
    },
    "&.right": {
      paddingRight: 57,
    },
  },
});

export const border = style({
  width: 1,
  background: "#ddd",
});
