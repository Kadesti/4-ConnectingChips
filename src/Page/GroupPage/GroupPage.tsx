import GroupArticle from "../../Component/Mission/GroupArticle";
import { useParams } from "react-router-dom";
import missionList from "../../data/groupList";
import { styled } from "styled-components";
import GroupActive from "./GroupActive";
import { GroupHeader } from "../../Component/Mission/GroupHeader";

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

/** 2023-08-22 GroupPage.tsx - 메인 컴프 */
const GroupPageS = styled.div`
  overflow-y: scroll;
  position: relative;
  /* backdrop-filter: blur(10px); */
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
