import { styled } from "styled-components";
import { MissionSingleWide } from "../../Component/Mission/MissionTab";
import { GroupInfoType } from "../../Type/MissionType";
import { findUrl } from "../../Hooks/useFindGroup";
import { chip_Active, chip_NoneActive } from "./HomeImageBarrel";
import { Link } from "react-router-dom";

const baseURL = process.env.REACT_APP_BASE_URL;
/** 2023-08-20 MyMission.tsx - 작심 중인 리스트 */
const MyMisson = ({ myGroupList, myID }: { myGroupList: GroupInfoType[]; myID: string }): JSX.Element => {  
  if (myGroupList.length === 0) return <></>;

  return (
    <MyMissonS>
      <h2>나의 작심 현황({myGroupList.length}/3)</h2>
      <MyMissionULS>
        {myGroupList.map((myGroup) => {          
          const missionInfo = myGroup.memberList.find((member) => member.id === myID);
          if (missionInfo === undefined) return "";

          const myDate = missionInfo.day;
          const myCount = missionInfo.count;
          const completedToday = false;

          const imageUrl = findUrl(myGroup);
          const { id, tag, title } = myGroup;

          return (
            <li key={id}>
              <MyMissionInfoS img={imageUrl} href={`/groupPage/${id}`}>
                <div>
                  <MissionSingleWide text={tag} />
                  <h2>{title}</h2>
                  <p>
                    🔥 <span className="date">{myDate}</span>일자 맛보기 중
                  </p>
                </div>
                <ChipList count={myCount} />
              </MyMissionInfoS>
              {myCount !== 3 ? (
                completedToday ? (
                  <TodayClearBtnS>오늘 작심 성공!</TodayClearBtnS>
                ) : (
                  <Link to="/uploadPost/1">
                    <NoneClearBtnS>작심 인증하기</NoneClearBtnS>
                  </Link>
                )
              ) : (
                <Link to={`/groupPage/${id}`}>
                  <ClearBtnS>재작심하기</ClearBtnS>
                </Link>
              )}
            </li>
          );
        })}
      </MyMissionULS>
    </MyMissonS>
  );
};

export default MyMisson;

/** 2023-08-20 MyMisson.tsx - 현재 카운트 (칩스) */
const ChipList = ({ count }: { count: number }): JSX.Element => {
  const isChecked: string[] = ["", "", ""];
  for (let idx = 0; idx < count; idx++) {
    isChecked[idx] = "checked";
  }

  return (
    <ChipListS>
      {isChecked.map((className, idx) => {
        const chipState = className === "checked" ? chip_Active : chip_NoneActive;
        return (
          <ChipCicleS state={className} key={idx}>
            <img src={chipState} alt="chip State" key={idx} />
          </ChipCicleS>
        );
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

  overflow-x: scroll;
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
const MyMissionInfoS = styled.a<{ img: string }>`
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

  cursor: pointer;

  h2 {
    font-size: 1.3rem;
    margin-top: 0.2rem;
    height: 4rem;
  }

  div,
  p,
  li,
  h2 {
    cursor: pointer;
  }

  span.date {
    color: var(--color-main);
  }
`;
/** 2023-08-21 MyMisson.tsx - 시식 칩 리스트*/
const ChipListS = styled.ul`
  display: flex;
`;

/** 2023-08-23 MyMisson.tsx - 시식 칩 항목*/
const ChipCicleS = styled.li<{ state: string }>`
  width: 2.52456rem;
  aspect-ratio: 1/1;
  background-color: ${(props) => (props.state === "checked" ? "#FFD32C" : "#D9D9D9")};
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 2rem;
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
  color: var(--color-main);
`;

/** 2023-08-27 MyMisson.tsx - 오늘 작심 성공! 버튼 */
const TodayClearBtnS = styled.button`
  padding: 1rem;
  width: 100%;
  border-radius: 2rem;
  background-color: var(--color-main);
  color: black;
`;
