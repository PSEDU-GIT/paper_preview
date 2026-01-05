import cx from "classnames";
import {
  choiceIndex,
  mathBase,
  mathFracLine,
  mathGlobal,
  mathImg,
  mathLatex,
  mathRect,
  mathSrOnly,
  mathTable,
  mathTableTd,
  questionChoiceGroup,
  questionChoiceGroupInner,
  titleGroup,
  titleGroupMath,
  titleGroupSub,
} from "psedu-math";
import { type ReactNode } from "react";
import { css, styled } from "styled-components";
import * as styles from "./customPaper.css";

type Props = {
  header: ReactNode;
  footer: ReactNode;
  left: ReactNode[] | ReactNode;
  right: ReactNode[] | ReactNode;
};

export default function CustomPaper({ header, footer, left, right }: Props) {
  return (
    <article className={styles.article}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>
        <BodyLayer className={cx(styles.bodyLayer, "left")}>{left}</BodyLayer>
        <div className={styles.border} />
        <BodyLayer className={cx(styles.bodyLayer, "right")}>{right}</BodyLayer>
      </div>
      <div className={styles.footer}>{footer}</div>
    </article>
  );
}

export const BodyLayer = styled.div`
  & * {
    ${css({ ...(mathGlobal as any) })}
  }

  & table {
    ${css({ ...(mathTable as any) })}
  }

  & table td {
    ${css({ ...(mathTableTd as any) })}
  }

  & img {
    ${css({ ...(mathImg as any) })}
  }

  & .RECT {
    ${css({ ...(mathRect as any) })}
  }

  & .ML__latex {
    ${css({ ...(mathLatex as any) })}
  }

  & .ML__sr-only {
    ${css({ ...(mathSrOnly as any) })}
  }

  & .ML__base {
    ${css({ ...(mathBase as any) })}
  }

  & .ML__frac-line {
    ${css({ ...(mathFracLine as any) })}
  }

  & .question-choice-group {
    ${css({ ...(questionChoiceGroup as any), justifyContent: "start" })}
  }

  & .question-choice-group > div {
    ${css({ ...(questionChoiceGroupInner as any) })}
  }

  & .choice-index {
    ${css({ ...(choiceIndex as any) })}
  }

  & .question-title-group {
    ${css({ ...(titleGroup as any) })}
  }

  & .question-title-group > span {
    ${css({ ...(titleGroupSub as any) })}
  }

  & .question-title-group span {
    ${css({ ...(titleGroupMath as any) })}
  }
`;
