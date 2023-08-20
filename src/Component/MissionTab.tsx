import { styled } from "styled-components";

type MissonTabType = {
  missionTab: string[];
  isActive: string;
};
type MissionSingleType = {
  text: string;
  isActive: string;
};

/** 2023-08-20 MissonTab.tsx - 공통되는 탭 리스트 */
const MissonTab = ({ missionTab, isActive }: MissonTabType): JSX.Element => {
  return (
    <MyMissonTabS>
      {missionTab.map((text, idx) => {
        return (
          <MissionSingle key={idx} text={text}isActive={isActive} />
        );
      })}
    </MyMissonTabS>
  );
};

/** 2023-08-20 MissonTab.tsx - 공통되는 탭 단일 */
const MissionSingle = ({ text, isActive = "" }: MissionSingleType) => {
  return <li className={`button ${isActive}`}>{text}</li>;
};

export { MissonTab, MissionSingle };

/** 2023-08-20 MyMisson.tsx - 작심 중인 리스트 탭 */
const MyMissonTabS = styled.ul`
  display: flex;

  li {
    border: 1px solid;
    padding: 10px;

    border-radius: 1.5rem;

    &:not(:first-child) {
      margin-left: 0.5rem;
    }
  }
`;

