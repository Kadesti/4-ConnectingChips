import { styled } from "styled-components";
import GroupArticle from "./GroupArticle";
import GroupActive from "../../Page/GroupPage/GroupActive";
import ActiveExample from "../../Page/GroupIntro/ActiveExample";

type Sort = "Active" | "Example" | "Create";
type GroupContentProps = {
  intro: string;
  rule: string;
  selected: number[];
  sort: Sort;
};

/** 2023-08-22 GroupContent.tsx - 아티클 + 내용 [ 0 : 헤드라인 1 : 소개 2 : 규칙 3 : 버튼 ] */
const GroupContent = ({ intro, rule, selected, sort }: GroupContentProps) => {
  return (
    <GroupContentS sort={sort}>
      {sort === "Active" ? (
        <>
          <GroupArticle groupText={intro} groupRule={rule} selected={selected} />
          <GroupActive />
        </>
      ) : sort === "Example" ? (
        <>
          <GroupArticle groupText={intro} groupRule={rule} selected={selected} />
          <ActiveExample />
        </>
      ) : sort === "Create" ? (
        <>
          <GroupArticle groupText={intro} groupRule={rule} selected={selected} sort={sort}/>
          <GroupActive />
        </>
      ) : (
        <></>
      )}
    </GroupContentS>
  );
};

export default GroupContent;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 아티클 + 인증 글 */
const GroupContentS = styled.div<{ sort: Sort }>`
  /* margin: 0 1rem; */
  margin: ${(props) => (props.sort === "Example" ? "0 1rem 1rem 1rem" : "0 1rem")};

  &::before {
    height: ${(props) => (props.sort === "Example" ? "18rem" : "0")};
    content: "";
    display: block;
  }
`;
