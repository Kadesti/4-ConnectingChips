import { styled } from "styled-components";
import { MissonTab } from "../../Component/MissionTab";

/** 2023-08-20 Home.tsx - 작심 중인 리스트 */
const MyMisson = (): JSX.Element => {
  const missionTab: string[] = ["전체", "작심중", "재작심"];
  const missionList: string[] = ["헬스", "걷기", "조깅"];
  const isActive: string = false ? "active" : "";

  return (
    <MyMissonS>
      <MissonTab missionTab={missionTab} isActive={isActive}/>
      <MyMissionListS>
        {missionList.map((el, idx) => {
          return (
            <li key={idx} className="button">
              {el}
            </li>
          );
        })}
      </MyMissionListS>
      <MyMissonButtonS>작심 인증하기</MyMissonButtonS>
    </MyMissonS>
  );
};

export default MyMisson;


/** 2023-08-20 MyMisson.tsx - 작심 중인 리스트 전체 */
const MyMissonS = styled.article`
  height: 17rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

/** 2023-08-20 MyMisson.tsx - 작심 중인 리스트 항목 */
const MyMissionListS = styled.ul`
  display: flex;

  li {
    width: 8rem;
    height: 8rem;

    border: 0.1px solid;

    &:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

/** 2023-08-20 MyMisson.tsx - 작성 인증하기 버튼 */
const MyMissonButtonS = styled.button`
  border: 0.1rem solid;
  padding: 1rem;
  width: 12rem;
  border-radius: 2rem;
`;
