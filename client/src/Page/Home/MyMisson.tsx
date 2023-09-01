import { styled } from "styled-components";
import { GroupInfoType } from "../../Type/MissionType";
import Carresel from "./Carresel/Carresel";

/** 2023-08-20 MyMission.tsx - 작심 중인 리스트 */
const MyMisson = ({ mygrouplist }: { mygrouplist: GroupInfoType[] }): JSX.Element => {
  if (mygrouplist.length === 0) return <></>;

  return (
    <MyMissonS>
      <h2>나의 작심 현황({mygrouplist.length}/3)</h2>
      <MyMissionULS>
        <Carresel />
      </MyMissionULS>
    </MyMissonS>
  );
};

export default MyMisson;

/** 2023-08-20 MyMisson.tsx - 나의 작심 현황 전체 */
const MyMissonS = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 2rem;

  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

/** 2023-08-20 MyMisson.tsx - 나의 작심 현황 리스트 */
const MyMissionULS = styled.ul`
  display: flex;
  margin-bottom: 1rem;
  margin-top: 1rem;
  position: relative;
  gap: 1rem;

  li:not(:first-child) {
    margin-left: 1rem;
  }
`;
