import { styled } from "styled-components";
import { MissionSingleWide } from "./MissionTab";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/** 2023-08-22 HeadLine.tsx - 그룹 정보 */
interface GroupInfoType {
  id: number;
  tab: string;
  title: string;
  member: number;
}

/** 2023-08-22 HeadLine.tsx - 타이틀 / 태그 / n일차 */
const HeadLine = (): JSX.Element => {
  const [urlPath, setUrlPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    const url = location.pathname;
    const keyword = "groupIntro";
    const extractedValue = url.split("/").find((part) => part === keyword);
    if (extractedValue === undefined) return;

    setUrlPath(extractedValue);
  }, [location]);

  const groupInfo: GroupInfoType = {
    id: 0,
    tab: "헬스",
    title: "몸에서 닭다리 빼기",
    member: 10,
  };

  return (
    <HeadLineS>
      <MissionSingleWide text={groupInfo.tab} />
      <h1>{groupInfo.title}</h1>
      <p className={urlPath === "groupIntro" ? "" : "subTitle"}>{groupInfo.member}명과 함께 맛보기 중</p>
    </HeadLineS>
  );
};

export default HeadLine;

/** 2023-08-22 HeadLine.tsx - 그룹 인트로 아티클 */
const HeadLineS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    font-size: 0.75rem;

    &.subTitle {
      color: var(--font-color2);
    }
  }
`;
