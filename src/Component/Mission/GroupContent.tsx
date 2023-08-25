import { styled } from "styled-components";
import GroupArticle from "./GroupArticle";
import GroupActive from "../../Page/GroupPage/GroupActive";
import { IntroExample, CreateExample } from "../../Page/GroupIntro/ActiveExample";
import { PageSort } from "../../Type/MissionType";
import DivideBaS from "./DivideBa";

type GroupContentProps = {
  intro: string;
  rule: string;
  selected: number[];
  PageSort: PageSort;
};

/** 2023-08-22 GroupContent.tsx - 아티클 + 내용 [ 0 : 헤드라인 1 : 소개 2 : 규칙 3 : 버튼 ] */
const GroupContent = ({ intro, rule, selected, PageSort }: GroupContentProps) => {
  return (
    <GroupContentS PageSort={PageSort}>
      <GroupArticle groupText={intro} groupRule={rule} selected={selected} PageSort={PageSort} />
      {PageSort === "Intro" ? (
        <IntroExample PageSort={PageSort} />
      ) : PageSort === "Page" ? (
        <>
          <DivideBaS />
          <GroupActive PageSort={PageSort} />
        </>
      ) : PageSort === "Create" ? (
        <>
          <DivideBaS />
          <CreateExample PageSort={PageSort} />
        </>
      ) : (
        <></>
      )}
    </GroupContentS>
  );
};

export default GroupContent;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 아티클 + 인증 글 */
const GroupContentS = styled.div<{ PageSort: PageSort }>`
  margin-bottom: 1rem;

  &::before {
    height: ${(props) => (props.PageSort === "Intro" ? "30rem" : "0")};
    content: "";
    display: block;
  }

  &::after {
    height: ${(props) => (props.PageSort === "Page" ? "1.25rem" : "0")};
    content: "";
    display: block;
  }
`;
