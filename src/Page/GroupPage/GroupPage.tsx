import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useFindGroup } from "../../Hooks/useFindGroup";
import { GroupHeader } from "../../Component/Mission/GroupHeader";
import Comment from "./Comment";
import scrollTop from "../../Hooks/scrollTop";
import DivideBaS from "../../Component/Mission/DivideBa";
import GroupActive from "./GroupActive";
import GroupArticle from "../../Component/Mission/GroupArticle";

/** 2023-08-22 GroupPage.tsx - 메인 컴프 */
const GroupPage = (): JSX.Element => {
  const { intro, rule, url } = useFindGroup();

  useEffect(() => {
    // scrollTop();
  }, []);

  return (
    <GroupPageS>
      <GroupHeader />
      <GroupImageS url={url} />
      <GroupSummary intro={intro} rule={rule} selected={[0, 1, 3]} />
      <GroupPostListS>
        <GroupPost />
        <GroupPost />
      </GroupPostListS>
    </GroupPageS>
  );
};

export default GroupPage;

type GroupPostProps = {
  intro: string;
  rule: string;
  selected: number[] | null;
};

/** 2023-08-26 GroupPage.tsx - 그룹페이지 소개글 */
const GroupSummary = ({ intro, rule, selected }: GroupPostProps) => {
  return (
    <>
      <GroupArticle groupText={intro} groupRule={rule} selected={selected} passsort="Page" />
      <DivideBaS />
    </>
  );
};

/** 2023-08-26 GroupPage.tsx - 그룹페이지 글 항목 */
const GroupPost = () => {
  const [Commented, setCommented] = useState(false);
  return (
    <GroupPostS>
      <GroupActive passsort="Page" setCommented={setCommented} />
      <Comment Commented={Commented} />
    </GroupPostS>
  );
};

const GroupPageS = styled.div`
  width: var(--width-mobile);
  position: relative;

  /* border: 1px solid; */
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 대표 이미지 */
const GroupImageS = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-size: 25rem;
  background-position: 0 -1rem;
  height: 10rem;
`;

const GroupPostListS = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--height-gap);
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 아티클 + 인증 글 */
const GroupPostS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
