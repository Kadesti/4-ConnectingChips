import GroupArticle from "../../Component/Mission/GroupArticle";
import { useParams } from "react-router-dom";
import missionList from "../../data/groupList";
import { styled } from "styled-components";
import GroupActive from "./GroupActive";
import { PostButton } from "../../Component/Mission/GroupButton";

/** 2023-08-22 GroupPage.tsx - 메인 컴프 */
const GroupPage = (): JSX.Element => {
  const { groupID } = useParams();
  if (groupID === undefined) {
    return <>잘못오셨습니다</>;
  }

  const groupMission = missionList.find((mission) => String(mission.groupID) === groupID);
  if (groupMission === undefined) {
    return <>잘못된 id입니다</>;
  }

  const { intro, rule } = groupMission;

  return (
    <GroupPageS>
      <GroupHeader />
      <GroupImageS url={groupMission.image} />
      <GroupContentS>
        {/* <GroupArticle groupText={intro} groupRule={rule} selected={[0, 1, 3]} state="post" /> */}
        <GroupArticle groupText={intro} groupRule={rule} selected={[0, 1, 3]} />
        <GroupActive />
      </GroupContentS>
    </GroupPageS>
  );
};

export default GroupPage;

const GroupHeader = (): JSX.Element => {
  return (
    <GroupHeaderS>
      <div>뒤로가기</div>
      <div>글작성</div>
    </GroupHeaderS>
  );
};
/** 2023-08-22 GroupPage.tsx - 메인 컴프 */
const GroupPageS = styled.div`
  overflow-y: scroll;
  position: relative;
  /* backdrop-filter: blur(10px); */
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 상단 고정 */
const GroupHeaderS = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 1rem 1.2rem;

  // 자연스럽게 붙이기
  /* padding-top: 3rem;
  top: -2rem; */

  // 아래 비치게 하기
  opacity: 0.7;
  backdrop-filter: blur(10px);
  /* -webkit-backdrop-filter: blur(10px); */
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 대표 이미지 */
const GroupImageS = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-size: 25rem;
  background-position: 0 -1rem;
  height: 10rem;
`;

/** 2023-08-22 GroupPage.tsx - 그룹페이지 아티클 + 인증 글 */
const GroupContentS = styled.div`
  margin: 0 1rem;
`;
