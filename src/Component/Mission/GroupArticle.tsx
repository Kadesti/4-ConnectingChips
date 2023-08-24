import { styled } from "styled-components";
import HeadLine from "../../Component/Mission/HeadLine";
import MissionRule from "../../Component/Mission/MissionRule";
import MissionIntro from "./MissionIntro";

/** 2023-08-22 GroupArticle.tsx - 그룹 아티클 Props */
interface GroupArticleProps {
  groupText: string;
  groupRule: string;
  selected: number[];
  sort?: "Create";
}

/** 2023-08-22 GroupArticle.tsx - 그룹 아티클 - 0 : 헤드라인 1 : 소개 2 : 규칙 3 : 버튼 */
const GroupArticle = ({ groupText, groupRule, selected, sort }: GroupArticleProps): JSX.Element => {
  // const compArr = [<HeadLine />, <MissionIntro groupText={groupText} />, <MissionRule groupRule={groupRule} />, <MissionButtonS state={state}>{state === "join" ? "참여하기" : "작심 인증하기"}</MissionButtonS>];
  const compArr = [<HeadLine />, <MissionIntro groupText={groupText} />, <MissionRule groupRule={groupRule} sort={sort} />];
  return (
    <GroupArticleS>
      {selected.map((el) => (
        <div key={el}>{compArr[el]}</div>
      ))}
    </GroupArticleS>
  );
};

export default GroupArticle;

/** 2023-08-22 GroupArticle.tsx - 그룹 인트로 아티클 */
const GroupArticleS = styled.article`
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  p {
    font-size: 0.875rem;
  }
`;
