import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { MissonTab } from "../../Component/Mission/MissionTab";
import { GroupListTab } from "../../Type/MissionType";
import { GroupInfoType } from "../../Type/MissionType";
import groupListData from "../../data/groupListData";

/** 23-08-20 GroupList.tsx - 메인 컴프 */
const GroupList = (): JSX.Element => {
  const missionTab: GroupListTab[] = [
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
      <GroupListListS>
        {groupListData.map((groupInfo) => {
          return <GroupListItem groupInfo={groupInfo} key={groupInfo.id} />;
        })}
      </GroupListListS>
    </article>
  );
};

export default GroupList;

/** 2023-08-20 GroupList.tsx - 작심 그룹 항목 */
const GroupListItem = ({ groupInfo }: { groupInfo: GroupInfoType }): JSX.Element => {
  const isFirst = groupInfo.memberList.length === 0;
  const groupID = groupInfo.id;
  const post = groupInfo.posts.find((group) => group.id === groupInfo.defaultImageid);
  if (post === undefined) return <></>;

  const image = post.images.find((image) => image.url);
  if (image === undefined) return <></>;

  return (
    <GroupListItemS key={groupInfo.id} img={image.url}>
      <div>
        <h2>{groupInfo.title}</h2>
        {isFirst ? <p>작심의 첫 주인공이 되어보세요!</p> : <p>{groupInfo.memberList.length}명 참여중</p>}
      </div>
      <Link to={`/groupIntro/${groupID}`}>
        <button>참여하기</button>
      </Link>
    </GroupListItemS>
  );
};

const GroupListListS = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  gap: var(--height-gap);
`;

const GroupListItemS = styled.li<{ img: string }>`
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
    margin-bottom: var(--height-gap);
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
