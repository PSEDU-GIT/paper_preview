import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { usePathToXml } from "./uesFetchToXml.ts";
import type { FetchDataResponseTypes } from "../types/fetchData.ts";
import type { ExamTypes } from "../types/exam.ts";
import { useStore } from "../state.ts";

export const useLoad = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { setFetchData } = useStore();

  const getFetchData = async (query: string) => {
    const response = await fetch(
      `https://bank2b.ps-e.co.kr/api/bookconceptpaper/qpaper?${query}`,
    );

    const json = (await response.json()) as FetchDataResponseTypes;

    const list: ExamTypes[] = await Promise.all(
      json.view.map(async (datum, index) => {
        return {
          code: datum.qd_code,
          num: index + 1,
          content: await usePathToXml(datum.question),
          answerContent: await usePathToXml(datum.commentary),
        };
      }),
    );

    return {
      subject: json.book_concept.title,
      list: list,
    };
  };

  useEffect(() => {
    const bankToken = searchParams.get("bank_token");
    const bankUserId = searchParams.get("bank_user_id");
    const csCode = searchParams.get("cs_code");
    const bCode = searchParams.get("b_code");
    const bsCode1 = searchParams.get("bs_code1");
    const bsCode2 = searchParams.get("bs_code2");
    const bsCode3 = searchParams.get("bs_code3");

    if (!bankToken || !bankUserId || !csCode || !bCode) {
      console.error("토큰이나 코드값이 없습니다.");
      return;
    }

    const queryParams = {
      bank_token: bankToken,
      bank_user_id: bankUserId,
      cs_code: csCode,
      b_code: bCode,
      bs_code1: bsCode1,
      bs_code2: bsCode2,
      bs_code3: bsCode3,
    };

    const query = new URLSearchParams(
      Object.entries(queryParams).filter(
        (entry): entry is [string, string] => entry[1] !== null,
      ),
    ).toString();

    getFetchData(query).then((data) => {
      setFetchData(data.subject, data.list);

      navigate("/process");
    });
  }, [searchParams, navigate, setFetchData]);
};
