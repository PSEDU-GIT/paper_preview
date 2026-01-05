import { BaseMathJax } from "psedu-math";
import { useEffect, useState } from "react";

export type MathJaxHeightTypes = {
  code: string;
  height: number[];
  element: HTMLElement[];
};

export type MathJaxContentTypes = {
  code: string;
  content: string;

  questionIndex?: number;
};

type Props = {
  data: MathJaxContentTypes[];
  onTrackable: (data: MathJaxHeightTypes[]) => void;
};

export default function MathJaxListAction({ data, onTrackable }: Props) {
  const [height, setHeight] = useState<
    Record<
      string,
      {
        element: HTMLElement[];
        height: number[];
      }
    >
  >({});

  const onLoad =
    (code: string) => (height: number[], element?: HTMLElement[]) => {
      setHeight((prevState) => {
        const result = { ...prevState };

        result[code] = {
          height: height,
          element: element ?? [],
        };

        return result;
      });
    };

  useEffect(() => {
    if (Object.keys(height).length !== data.length) return;

    const result: MathJaxHeightTypes[] = Object.entries(height).map((entry) => {
      return {
        code: entry[0],
        height: entry[1].height,
        element: entry[1].element,
      };
    });

    onTrackable?.(result);
  }, [height]);

  return (
    <>
      {data.map((datum, index) => (
        <BaseMathJax
          key={index}
          content={datum.content}
          questionIndex={datum.questionIndex}
          onLoad={onLoad(datum.code)}
        />
      ))}
    </>
  );
}
