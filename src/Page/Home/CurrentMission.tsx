import { styled } from "styled-components";
import { MissonTab } from "../../Component/Mission/MissionTab";
import { CurrentMissionTab } from "../../Type/MissionType";
import { GroupInfoType } from "../../Type/MissionType";
import groupList from "../../data/groupList";

/** 23-08-20 CurrentMission.tsx - 메인 컴프 */
const CurrentMission = (): JSX.Element => {
  const missionTab: CurrentMissionTab[] = [
    {
      id: 0,
      title: "전체",
    },
    {
      id: 1,
      title: "조깅",
    },
    {
      id: 2,
      title: "헬스",
    },
    {
      id: 3,
      title: "자전거",
    },
  ];

  return (
    <article>
      <h2>작심 그룹 리스트</h2>
      <MissonTab missionTab={missionTab} />
      <CurrentMissionListS>
        {groupList.map((groupInfo) => {
          return <CurrentMissionItem groupInfo={groupInfo} key={groupInfo.id} />;
        })}
      </CurrentMissionListS>
    </article>
  );
};

export default CurrentMission;

/** 2023-08-20 CurrentMission.tsx - 작심 그룹 항목 */
const CurrentMissionItem = ({ groupInfo }: { groupInfo: GroupInfoType }): JSX.Element => {
  const post = groupInfo.posts.find((group) => group.id === groupInfo.defaultImageid);
  if (post === undefined) return <></>;

  const image = post.images.find(image => image.url)
  if(image === undefined) return <></>

  return (
    <CurrentMissionItemS key={groupInfo.id} img={image.url}>
      <div>
        <h2>{groupInfo.title}</h2>
        <p>{groupInfo.memberList.length}명 참여중</p>
      </div>
      <button>참여하기</button>
    </CurrentMissionItemS>
  );
};

const CurrentMissionListS = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;

const CurrentMissionItemS = styled.li<{ img: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  border: 1px solid;
  border-radius: 1.25rem;

  background-image: url(${(props) => props.img});
  background-size: 20rem;

  color: white;

  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  button {
    padding: 0.5rem;
    border: 0.15rem solid;
    border-radius: 2rem;

    font-size: 0.8125rem;
    color: white;

    &:hover {
      background-color: black;
      color: white;
      border: 0.15rem solid black;
    }
  }
`;
