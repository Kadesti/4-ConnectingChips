import { styled } from "styled-components";
import HeadLine from "../../Component/Mission/HeadLine";
import MissionRule from "../../Component/Mission/MissionRule";
import MissionIntro from "./MissionIntro";
import { PostButton } from "./GroupButton";
import { PageSort } from "../../Type/MissionType";

/** 2023-08-22 GroupArticle.tsx - 그룹 아티클 Props */
interface GroupArticleProps {
  groupText: string;
  groupRule: string;
  selected: number[];
  PageSort: PageSort;
}

/** 2023-08-22 GroupArticle.tsx - 그룹 아티클 - 0 : 헤드라인 1 : 소개 2 : 규칙 3 : 버튼 */
const GroupArticle = ({ groupText, groupRule, selected, PageSort }: GroupArticleProps): JSX.Element => {
  const compArr = [<HeadLine />, <MissionIntro groupText={groupText} />, <MissionRule groupRule={groupRule} PageSort={PageSort} />, <PostButton />];
  return (
    <GroupArticleS PageSort={PageSort}>
      {selected.map((el) => (
        <div key={el}>{compArr[el]}</div>
      ))}
    </GroupArticleS>
  );
};

export default GroupArticle;

/** 2023-08-22 GroupArticle.tsx - 그룹 인트로 아티클 */
const GroupArticleS = styled.article<{ PageSort: PageSort }>`
  margin: ${(props) => (props.PageSort === "Intro" ? "0 1rem 1rem 1rem" : "0 1rem")};
  margin-top: 1rem;
  margin-bottom: 1.25rem;

  p {
    font-size: 0.875rem;
  }
`;
