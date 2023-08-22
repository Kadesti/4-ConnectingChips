import { styled } from "styled-components";

/** 2023-08-22 MissionRule.tsx - 미션 규칙 */
const MissionRule = ({ groupRule }: { groupRule: string }): JSX.Element => {
  return (
    <MissionRuleS>
      <div>인증 글쓰기 규칙</div>
      <p className="rule">{groupRule}</p>
    </MissionRuleS>
  );
};

export default MissionRule;

/** 2023-08-22 MissionRule.tsx - 그룹 아티클 규칙 */
const MissionRuleS = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  padding: 1rem;
  margin-top: 1.25rem;
  border-radius: 1rem;

  p {
    white-space: pre-line;
    font-size: 0.875rem;
  }

  .rule {
    color: #767676;
  }
`;
