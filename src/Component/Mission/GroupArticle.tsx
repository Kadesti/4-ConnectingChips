import { styled } from "styled-components";
import HeadLine from "../../Component/Mission/HeadLine";
import MissionRule from "../../Component/Mission/MissionRule";
import MissionIntro from "./MissionIntro";

/** 2023-08-22 GroupArticle.tsx - 그룹 아티클 Props */
interface GroupArticleProps {
  groupText: string;
  groupRule: string;
  selected: number[];
  state: "join" | "post";
}

/** 2023-08-22 GroupArticle.tsx - 그룹 아티클 - 0 : 헤드라인 1 : 소개 2 : 규칙 3 : 버튼 */
const GroupArticle = ({ groupText, groupRule, selected, state }: GroupArticleProps): JSX.Element => {
  const compArr = [<HeadLine />, <MissionIntro groupText={groupText} />, <MissionRule groupRule={groupRule} />, <MissionButtonS state={state}>{state === "join" ? "참여하기" : "작심 인증하기"}</MissionButtonS>];
  return <GroupArticleS>{selected.map((el) => compArr[el])}</GroupArticleS>;
};

export default GroupArticle;

/** 2023-08-22 GroupArticle.tsx - 그룹 인트로 아티클 */
const GroupArticleS = styled.article`
  margin-top: 1rem;
  margin-bottom: 5.44rem;

  p {
    white-space: pre-line;
    font-size: 0.875rem;
  }
`;

/** 2023-08-22 GroupArticle.tsx - 참여하기 버튼 */
const MissionButtonS = styled.button<{ state: "join" | "post" }>`
  background-color: var(--color-main);
  background-color: ${(props) => (props.state === "join" ? "" : "transparent")};
  border: 0.2rem solid;
  border-color: var(--color-main);
  border-color: ${(props) => (props.state === "join" ? "transparent" : "")};

  width: 100%;
  height: 3.5rem;

  font-size: 1rem;
  border-radius: 1.88rem;

  margin-top: 1.25rem;
`;
