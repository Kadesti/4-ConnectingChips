import { styled } from "styled-components";
import { MissonTab } from "../../Component/MissionTab";

/** 2023-08-20 CurrentMission.tsx - 작심그룹 항목 타입 */
type groupInfo = {
  id: number;
  title: string;
  memberNum: number;
  url: string;
};

/** 2023-08-20 CurrentMission.tsx - 메인 컴프 */
const CurrentMission = (): JSX.Element => {
  const missionTab: string[] = ["전체", "걷기", "조깅", "헬스", "자전거"];
  const groupList: groupInfo[] = [
    {
      id: 0,
      title: "첫번째 그룹",
      memberNum: 10,
      url: "/어디로든 문",
    },
    {
      id: 1,
      title: "두번째 그룹",
      memberNum: 20,
      url: "/어디로든 문2",
    },
  ];
  const isActive: string = false ? "active" : "";

  return (
    <article>
      <h2>작심 그룹 리스트</h2>
      <MissonTab missionTab={missionTab} isActive={isActive} />
      <CurrentMissionListS>
        {groupList.map((groupInfo) => {
          return <CurrentMissionItem groupInfo={groupInfo} />;
        })}
      </CurrentMissionListS>
    </article>
  );
};

export default CurrentMission;

/** 2023-08-20 CurrentMission.tsx - 작심 그룹 항목 */
const CurrentMissionItem = ({ groupInfo }: { groupInfo: groupInfo }): JSX.Element => {
  return (
    <CurrentMissionItemS key={groupInfo.id}>
      <div>
        <h2>{groupInfo.title}</h2>
        <p>{groupInfo.memberNum}명 참여중</p>
      </div>
      <button>참여하기</button>
    </CurrentMissionItemS>
  );
};

const CurrentMissionS = styled.article`
  height: 100%;
`;

const CurrentMissionListS = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const CurrentMissionItemS = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  border: 1px solid;

  &:not(:first-child) {
    margin-top: 1rem;
  }

  h2 {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  button {
    padding: 0.5rem;
    border: 0.15rem solid;
    border-radius: 2rem;
  }
`;