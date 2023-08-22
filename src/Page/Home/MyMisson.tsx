import { styled } from "styled-components";
import { MissionSingleWide } from "../../Component/Mission/MissionTab";
import { GroupInfoType } from "../../Type/MissionType";

/** 2023-08-20 Home.tsx - 작심 중인 리스트 */
const MyMisson = ({ myMissions, myID }: { myMissions: GroupInfoType[]; myID: number }): JSX.Element => {
  return (
    <MyMissonS>
      <h2>나의 작심 현황({myMissions.length}/3)</h2>
      <MyMissionULS>
        {myMissions.map((mission) => {
          const missionInfo = mission.memberList.find((member) => member.memberid === myID);
          if (missionInfo === undefined) return "";

          const myDate = missionInfo.day;
          const myCount = missionInfo.count;
          

          return (
            <li key={mission.groupID}>
              <MyMissionInfoS img={mission.image}>
                <div>
                  <MissionSingleWide text={mission.tag} />
                  <h2>{mission.title}</h2>
                  <p>🔥 {myDate}일자 맛보기 중</p>
                </div>
                <ChipList count={myCount} />
              </MyMissionInfoS>
              {myCount !== 3 ? <NoneClearBtnS>작심 인증하기</NoneClearBtnS> : <ClearBtnS>재작심하기</ClearBtnS>}
            </li>
          );
        })}
      </MyMissionULS>
    </MyMissonS>
  );
};

export default MyMisson;

const ChipList = ({ count }: { count: number }): JSX.Element => {
  const isChecked: string[] = ["", "", ""];
  for (let idx = 0; idx < count; idx++) {
    isChecked[idx] = "checked";
  }
  return (
    <ChipListS>
      {isChecked.map((className, idx) => {
        return <li className={className} key={idx} />;
      })}
    </ChipListS>
  );
};

/** 2023-08-20 MyMisson.tsx - 나의 작심 현황 전체 */
const MyMissonS = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 2rem;
`;

/** 2023-08-20 MyMisson.tsx - 나의 작심 현황 리스트 */
const MyMissionULS = styled.ul`
  display: flex;
  margin-bottom: 1rem;
  margin-top: 1rem;

  li:not(:first-child) {
    margin-left: 1rem;
  }
`;

/** 2023-08-21 MyMisson.tsx - 나의 작심 현황 항목 정보 */
const MyMissionInfoS = styled.div<{ img: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 11.3125rem;
  aspect-ratio: 1/1;

  border: 0.1px solid;
  border-radius: 0.625rem;
  margin-bottom: 1rem;
  padding: 1rem;

  background-image: url(${(props) => props.img});
  background-size: 20rem;

  color: white;

  h2 {
    font-size: 1.3rem;
    margin-top: 0.2rem;
    height: 4rem;
  }
`;
/** 2023-08-21 MyMisson.tsx - 시식 칩 리스트*/
const ChipListS = styled.ul`
  display: flex;

  li {
    width: 2rem;
    aspect-ratio: 1/1;
    border: 1px solid;
    border-radius: 100%;

    &.checked {
      /* border: none; */
      background-color: yellow;
    }
  }
`;

/** 2023-08-21 MyMisson.tsx - 작심 인증하기 버튼 */
const NoneClearBtnS = styled.button`
  border: 0.1rem solid yellow;
  padding: 1rem;
  width: 100%;
  border-radius: 2rem;
`;

/** 2023-08-21 MyMisson.tsx - 다른 작심 둘러보기 버튼 */
const ClearBtnS = styled.button`
  padding: 1rem;
  width: 100%;
  border-radius: 2rem;
  background-color: black;
  color: yellow;
`;
