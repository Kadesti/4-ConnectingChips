import { styled } from "styled-components";

import { GNB } from "../../AppBarral";
import GroupArticle from "../../Component/Mission/GroupArticle";
import ActiveExample from "./ActiveExample";
import { JoinButtonCTA } from "../../Component/Mission/GroupButton";
import { GroupIntroHeader } from "../../Component/Mission/GroupHeader";
import { useFindGroup } from "../../Hooks/useFindGroup";
import GroupContent from "../../Component/Mission/GroupContent";

/** 2023-08-21 GroupIntro.tsx - 메인 컴프 */
const GroupIntro = (): JSX.Element => {
  const { intro, rule, url } = useFindGroup();

  return (
    <GroupIntroS img={url}>
      <BGDarkS>
        <GroupContainerS>
          <GroupIntroHeader />
          <div></div>
          <GroupContent intro={intro} rule={rule} selected={[0, 1, 2]} sort="Example" />

          {/* <GroupIntroContentS>
            <GroupArticle groupText={intro} groupRule={rule} selected={[0, 1, 2, 3]} />
            <ActiveExample />
          </GroupIntroContentS> */}
          <CTAContainer />
        </GroupContainerS>
      </BGDarkS>
    </GroupIntroS>
  );
};

export default GroupIntro;

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
  /* height: 53rem; */
  height: 100vh;

  background-image: url(${(props) => props.img});
  background-size: 70rem;
  background-position-x: -8rem;
  background-position-y: -2rem;
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
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

/** 2023-08-22 GroupIntro.tsx - CTA 참여하기 + GNB */
const CTAContainerS = styled.div`
  position: sticky;
  bottom: 0;
  width: var(--width-mobile);

  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
`;
