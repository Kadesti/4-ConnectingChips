import { styled } from "styled-components";
import HeadLine from "../../Component/Mission/HeadLine";
import MissionRule from "../../Component/Mission/MissionRule";
import MissionIntro from "./MissionIntro";

/** 2023-08-22 GroupArticle.tsx - 그룹 아티클 Props */
interface GroupArticleProps {
  groupText: string;
  groupRule: string;
}

/** 2023-08-22 GroupArticle.tsx - 그룹 아티클 - 헤드라인, 소개, 규칙, 버튼 */
const GroupArticle = ({ groupText, groupRule }: GroupArticleProps): JSX.Element => {
  return (
    <GroupArticleS>
      <HeadLine />
      <MissionIntro groupText={groupText} />
      <MissionRule groupRule={groupRule} />
      <MissionButtonS>참여하기</MissionButtonS>
    </GroupArticleS>
  );
};

export default GroupArticle;

/** 2023-08-22 GroupArticle.tsx - 그룹 인트로 아티클 */
const GroupArticleS = styled.article`
  margin-bottom: 5.44rem;

  p {
    white-space: pre-line;
    font-size: 0.875rem;
  }
  p.intoduce {
    margin-top: 1rem;
  }
`;

/** 2023-08-22 GroupArticle.tsx - 참여하기 버튼 */
const MissionButtonS = styled.button`
  background-color: #fb0;
  width: 100%;
  height: 3.5rem;

  font-size: 1rem;
  border-radius: 1.88rem;
`;
