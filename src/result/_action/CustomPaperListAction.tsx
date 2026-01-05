import { type ReactNode } from "react";
import { List, type ListRowRenderer } from "react-virtualized";
import { EXAM_HEIGHT } from "../_component/customPaper.css.ts";

const HEIGHT_GAP = 10;

type Props = {
  children: ReactNode[];
  width: number;
};

export default function CustomPaperListAction({ children, width }: Props) {
  const localChildren = children.filter((child) => !!child);

  const elementList: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div
        key={key}
        style={{
          ...style,
          padding: `0 ${HEIGHT_GAP}px ${HEIGHT_GAP}px ${HEIGHT_GAP}px`,
        }}
      >
        {localChildren[index]}
      </div>
    );
  };

  return (
    <List
      width={width}
      height={EXAM_HEIGHT}
      rowHeight={EXAM_HEIGHT + HEIGHT_GAP * 2}
      rowCount={localChildren.length}
      rowRenderer={elementList}
      overscanRowCount={2}
    />
  );
}
