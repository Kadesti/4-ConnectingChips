import { styled } from "styled-components";
import GroupArticle from "../../Component/Mission/GroupArticle";
import { useParams } from "react-router-dom";
import missionList from "../../data/groupList";
import ActiveExample from "./ActiveExample";
import { JoinButtonCTA } from "../../Component/Mission/GroupButton";
import { GNB } from "../../AppBarral";

/** 2023-08-21 GroupIntro.tsx - 메인 컴프 */
const GroupIntro = (): JSX.Element => {
  const { groupID } = useParams();

  if (groupID === undefined) {
    return <>잘못오셨습니다</>;
  }

  const groupMission = missionList.find((item) => String(item.groupID) === groupID);
  if (groupMission === undefined) {
    return <>잘못된 id입니다</>;
  }
  const { intro, rule } = groupMission;

  return (
    <GroupIntroS img={groupMission.image}>
      <BGDarkS>
        <GroupContainerS>
          <GroupIntroHeader />
          <GroupIntroContentS>
            <GroupArticle groupText={intro} groupRule={rule} selected={[0, 1, 2, 3]} />
            <ActiveExample />
          </GroupIntroContentS>
          <CTAContainer />
        </GroupContainerS>
      </BGDarkS>
    </GroupIntroS>
  );
};

export default GroupIntro;

/** 2023-08-22 GroupIntro.tsx - 그룹 인트로 뒤로가기 */
const GroupIntroHeader = (): JSX.Element => {
  return <GroupIntroHeaderS>뒤로가기</GroupIntroHeaderS>;
};

/** 2023-08-22 GroupIntro.tsx - CTA 참여하기 + GNB */
const CTAContainer = (): JSX.Element => {
  return (
    <CTAContainerS>
      <GNB />
      <JoinButtonCTA />
    </CTAContainerS>
  );
};

/** 2023-08-21 GroupIntro.tsx - 메인 컴프 */
const GroupIntroS = styled.div<{ img: string }>`
  position: relative;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid;
  height: 100%;

  background-image: url(${(props) => props.img});
  background-size: 78rem;
  background-position-x: -25rem;
`;

/** 2023-08-21 GroupIntro.tsx - 백 어두운 레이어 추가 */
const BGDarkS = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.3);
`;

/** 2023-08-21 GroupIntro.tsx - 그룹 인트로 뒤로가기 + 컨텐츠 + 예시 + CTA */
const GroupContainerS = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  overflow-y: scroll;
`;

/** 2023-08-22 GroupIntro.tsx - 그룹 인트로 뒤로가기 */
const GroupIntroHeaderS = styled.div`
  margin: 1rem;
  position: sticky;
  top: 0;
`;

/** 2023-08-22 GroupIntro.tsx - 그룹 인트로 헤드라인 + 예시 */
const GroupIntroContentS = styled.div`
  margin: 0 1rem;
`

/** 2023-08-22 GroupIntro.tsx - CTA 참여하기 + GNB */
const CTAContainerS = styled.div`
  position: sticky;
  bottom: 0;

  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
`;
