import { type ReactNode, useMemo } from "react";
import CustomPaper from "../_component/CustomPaper";
import { DEFAULT_LAYER } from "../_state/useHeight";
import { useLayout } from "../_state/useLayout.ts";
import Footer from "../_component/Footer.tsx";
import CustomPaperListAction from "../_action/CustomPaperListAction.tsx";
import { EXAM_WIDTH } from "../_component/customPaper.css.ts";

type Props = {
  children: ReactNode | ReactNode[];
  height: number[];

  header: ReactNode;
};

export default function PaperListTemplate({ children, height, header }: Props) {
  const paper = useMemo(() => {
    if (height.length === 0) return [];

    return useLayout(height, DEFAULT_LAYER);
  }, [height]);

  const elementFooter = (currPage: number, totalPage: number) => {
    const footerProps = {
      currPage: Math.floor(currPage),
      totalPage: Math.round(totalPage),
    };

    return <Footer {...footerProps} />;
  };

  const getCurrData = (index: number, currPaper: number[]) => {
    const currIndex = paper.slice(0, index).reduce((a, b) => a + b.length, 0);

    if (!Array.isArray(children)) return children;

    return children.slice(currIndex, currIndex + currPaper.length);
  };

  const element = paper.map(
    (_, index) =>
      index % 2 === 0 && (
        <CustomPaper
          key={index}
          header={header}
          footer={elementFooter(index / 2 + 1, paper.length / 2)}
          left={getCurrData(index, paper[index])}
          right={getCurrData(index + 1, paper[index + 1] ?? [])}
        />
      ),
  );

  return (
    <CustomPaperListAction width={EXAM_WIDTH + 10}>
      {element}
    </CustomPaperListAction>
  );
}
