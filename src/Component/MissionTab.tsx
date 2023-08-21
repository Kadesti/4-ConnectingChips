import { styled } from "styled-components";

type MissonTabType = {
  missionTab: string[];
  isActive: string;
};
type MissionSingleType = {
  text: string;
  isActive?: string;
};

/** 2023-08-20 MissonTab.tsx - 공통되는 탭 리스트 */
const MissonTab = ({ missionTab, isActive }: MissonTabType): JSX.Element => {
  return (
    <MyMissonTabS>
      {missionTab.map((text, idx) => {
        return <MissionSingle key={idx} text={text} isActive={isActive} />;
      })}
    </MyMissonTabS>
  );
};

/** 2023-08-20 MissonTab.tsx - 공통되는 탭 단일 */
const MissionSingle = ({ text, isActive = "" }: MissionSingleType) => {
  return <MissionSingleS className={`button ${isActive}`}>{text}</MissionSingleS>;
};

/** 2023-08-21 MissonTab.tsx - 공통되는 탭 단일 / 가로 확장 */
const MissionSingleWide = ({ text, isActive = "" }: MissionSingleType) => {
  return (
    <MissionSingleWideS className={isActive}>
      <p>{text}</p>
    </MissionSingleWideS>
  );
};

export { MissonTab, MissionSingle, MissionSingleWide };

/** 2023-08-20 MyMisson.tsx - 작심 중인 리스트 탭 */
const MyMissonTabS = styled.ul`
  display: flex;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const MissionSingleS = styled.li`
  display: inline-block;

  border: 1px solid;
  padding: 10px;

  border-radius: 1.5rem;

  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

const MissionSingleWideS = styled.div`
  border-radius: 1.5rem;

  padding: 0.3rem 1.5rem;
  font-size: 0.9rem;

  border: 1px solid;
  width: fit-content;
`;
