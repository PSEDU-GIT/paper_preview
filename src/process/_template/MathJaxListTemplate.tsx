import { useMemo, useState } from "react";
import MathJaxListAction, {
  type MathJaxContentTypes,
  type MathJaxHeightTypes,
} from "../_action/MathJaxListAction.tsx";

type Props = {
  data: MathJaxContentTypes[];
  width: number;

  limitCount?: number;
  onTrackable?: (height: MathJaxHeightTypes[]) => void;
};

export default function MathJaxListTemplate({
  data,
  width,
  limitCount = 10,
  onTrackable,
}: Props) {
  const [totalHeight, setTotalHeight] = useState<MathJaxHeightTypes[]>([]);
  const [page, setPage] = useState(0);

  const limitData = useMemo(() => {
    const result: MathJaxContentTypes[][] = [];

    for (let i = 0; i < data.length; i += limitCount) {
      const curr = data.slice(i, i + limitCount);
      result.push(curr);
    }

    return result;
  }, [data]);

  const onTrackableHeight = (height: MathJaxHeightTypes[]) => {
    const nHeight = totalHeight.concat(height);

    setTotalHeight(nHeight);
    onTrackable?.(nHeight);

    setPage(page + 1);
  };

  return (
    <div style={{ minWidth: width, width: width }}>
      {limitData.map(
        (datum, index) =>
          index === page && (
            <MathJaxListAction
              key={index}
              data={datum}
              onTrackable={onTrackableHeight}
            />
          ),
      )}
    </div>
  );
}
